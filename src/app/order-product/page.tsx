"use client";
import { useRouter } from 'next/navigation';

export default function OrderProduct() {

    const router = useRouter();

    const handleClick = () => {
        console.log("Order placed");

        // You can perform any necessary actions here, such as sending the order data to a server or updating the state, and then navigate to the home page or any other page after the order is placed.
        router.push("/");
    }


    return (
        <>
            <h1>Order Product Page</h1>;
            <button onClick={handleClick}>Order Now</button>
        </>
    )
}