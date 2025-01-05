// Handling QR code generation
const generateQRCode = (data) => {
    // Generate QR code using 'qrcode' library (assuming you install it)
    const qrCode = new QRCode(document.getElementById("qrCodeContainer"), {
        text: data,
        width: 128,
        height: 128
    });
};

// Example of using a QR code with the URL to display the uploaded image
generateQRCode("https://yourwebsite.com/uploads/photo1.jpg");
