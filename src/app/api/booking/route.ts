import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Server-side logging of the captured lead details
        console.log("----------------------------------------");
        console.log("🔔 NEW BOOKING REQUEST RECEIVED");
        console.log("Timestamp:", new Date().toISOString());
        console.log("Details:", JSON.stringify(data, null, 2));
        console.log("----------------------------------------");

        // TODO: Wire up Resend/SendGrid to email the sales team
        // Example: await resend.emails.send({ ... })

        // TODO: Wire up CRM webhook (HubSpot, Salesforce, etc.)
        // Example: await fetch("https://hooks.zapier.com/...", { method: "POST", body: JSON.stringify(data) })

        // Artificial delay to simulate network/processing for UX loading state
        await new Promise((resolve) => setTimeout(resolve, 1500));

        return NextResponse.json({
            success: true,
            message: "Request received successfully."
        }, { status: 200 });

    } catch (error) {
        console.error("Booking submission error:", error);
        return NextResponse.json({
            success: false,
            message: "Failed to process booking request."
        }, { status: 500 });
    }
}
