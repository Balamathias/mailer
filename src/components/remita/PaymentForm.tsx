'use client'

// @ts-ignore
import RemitaPayment from "react-remita";
import { useState } from "react";

import { Input } from "../ui/input";
import { toast } from "sonner";
import { buttonVariants } from "../ui/button";
import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useRouter } from "next/navigation";

function PaymentForm() {
    const router = useRouter()
  const [paymentData, setpaymentData] = useState({
    key: "QzAwMDAyNzEyNTl8MTEwNjE4NjF8OWZjOWYwNmMyZDk3MDRhYWM3YThiOThlNTNjZTE3ZjYxOTY5NDdmZWE1YzU3NDc0ZjE2ZDZjNTg1YWYxNWY3NWM4ZjMzNzZhNjNhZWZlOWQwNmJhNTFkMjIxYTRiMjYzZDkzNGQ3NTUxNDIxYWNlOGY4ZWEyODY3ZjlhNGUwYTY=", // enter your key here
    customerId: "sjjejkdkdkd",
    firstName: "kkkl",
    lastName: "llkkjj",
    email: "balamathias05@gmail.com",
    amount: '500',
    narration: "bla bla bla",
  });
  let data = {
    ...paymentData,
    onSuccess: function (response: any) {
      // function callback when payment is successful
      console.log(response)
      toast.success("Success!", {description: "Payments made successfully"});
      router.push('/checkout/success?transactionId='+ response.transactionId + '&amount=' + response.amount + '&status=success')
    },
    onError: function (response: any) {
      // function callback when payment fails
      toast.error('Error', { description: "Sorry, an error occured and we could not process your payments by this time."})
      console.log("callback Error Response", response);
    },
    onClose: function () {
      // function callback when payment modal is closed
    //   toast.info("Closed", {description: "Payment modal closed"})
      console.log("closed");
    },
  };

return (
    <Card className="w-full max-w-sm shadow-lg rounded-lg py-5 drop-shadow-lg">
        <CardHeader>
            <CardTitle className="text-2xl py-1">Checkout</CardTitle>
            <CardDescription>
            Enter your payments details and proceed to checkout.
            </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            {/* <div className="grid grid-col gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                    className="w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    type='text'
                    id="firstName"
                    placeholder='First Name'
                    onChange={(e) =>
                        setpaymentData({ ...paymentData, firstName: e.target.value })
                    }
                />
            </div> */}
            {/* <div className="grid grid-col gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                    className="w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    type='text'
                    id="lastName"
                    placeholder='Last Name'
                    onChange={(e) =>
                        setpaymentData({ ...paymentData, lastName: e.target.value })
                    }
                />
            </div> */}
            <div className="grid grid-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    className="w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    type='text'
                    id="email"
                    placeholder='Email'
                    onChange={(e) =>
                        setpaymentData({ ...paymentData, email: e.target.value })
                    }
                />
            </div>
            <div className="grid grid-col gap-2">
                <Label htmlFor="amount">Amount</Label>
                <Input
                    className="w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    type='text'
                    id="amount"
                    placeholder='Amount'
                    onChange={(e) =>
                        setpaymentData({ ...paymentData, amount: e.target.value })
                    }
                />
            </div>
            <div className="grid grid-col gap-2">
                <Label htmlFor="description">Description (optional)</Label>
                <Input
                    className="w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    type='text'
                    id="description"
                    placeholder='Description (optional)'
                    onChange={(e) =>
                        setpaymentData({ ...paymentData, narration: e.target.value })
                    }
                />
            </div>
            <RemitaPayment
                remitaData={data}
                className={buttonVariants()} // class to style the button
                text='Pay with Remita' //text to show on button
                // add a 'live' prop to use the live urls/keys
            />
        </CardContent>
    </Card>
);
}

export default PaymentForm;
