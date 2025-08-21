import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export const OrderForm = (props) => {
  const { cart, totalPrices } = props;
  // console.log(totalPrices, "totalPrices");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [disableStatus, setDisableStatus] = useState(false);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const onSubmit = async (data) => {
    setDisableStatus(true);

    // 1️⃣ Load Razorpay script
    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load. Check your internet.");
      return;
    }

    // 2️⃣ Create order from backend
    const orderRes = await fetch("https://apis.pharmmaex.com/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: totalPrices,
        name: data.firstName,
        email: data.email,
        phone: data.phone,
        cart: cart,
      }),
    });

    const orderData = await orderRes.json();
    console.log(orderData, "orderData");

    // 3️⃣ Open Razorpay Popup
    const options = {
      key: "rzp_test_R7z6dY1nMfTwQu", // Replace with Razorpay test Key ID
      amount: orderData.amount,
      currency: "INR",
      name: "My Shop",
      description: "Order Payment",
      order_id: orderData.orderId,
      // method: {
      //   card: true,
      //   netbanking: true,
      // },
      handler: async function (response) {
        // 4️⃣ Verify payment on backend
        const verifyRes = await fetch("https://apis.pharmmaex.com/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        });

        const verifyData = await verifyRes.json();
        console.log(verifyData, "verifyData");

        if (verifyData.success) {
          // ✅ Payment success → save order
            await fetch("https://apis.pharmmaex.com/extra-product-list", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...data,
                totalPrices,
                productTable: cart,
              }),
            });

          router.push("/thank-you");
        } else {
          alert("Payment verification failed!");
          // router.refresh();
        }
      },
      prefill: {
        name: data.firstName,
        email: data.email,
        contact: data.phone,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <section id="registrationForm" className="registration-section orderForm">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md 12 col-lg-12">
            <form
              className="free-registration-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-box">
                <div className="form-item">
                  <label htmlFor="fname">First Name:</label>
                  <input
                    type="text"
                    {...register("firstName", { required: true })}
                    placeholder="First Name"
                  />
                  {errors.firstName && (
                    <span className="error-message">
                      First name is required
                    </span>
                  )}
                </div>

                <div className="form-item">
                  <label htmlFor="email">Enter Email:</label>
                  <input
                    type="text"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    placeholder="Enter Email"
                  />
                  {errors.email && (
                    <span className="error-message">
                      Valid Email is required
                    </span>
                  )}
                </div>

                <div className="form-item">
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="number"
                    {...register("phone", { required: true })}
                    placeholder="Phone Number"
                  />
                  {errors.phone && (
                    <span className="error-message">
                      Phone number is invalid
                    </span>
                  )}
                </div>

                <div className="form-item">
                  <label htmlFor="company">Company:</label>
                  <input
                    type="text"
                    {...register("company", { required: true })}
                    placeholder="Company"
                  />
                  {errors.company && (
                    <span className="error-message">
                      Company name is required
                    </span>
                  )}
                </div>
              </div>

              <button
                disabled={disableStatus}
                type="submit"
                className="submit-reg-form"
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
