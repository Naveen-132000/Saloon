const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch('http://localhost:3000/submit-contact', { // Ensure full backend URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            // If the server responds with an error, log the full response
            const errorResponse = await response.text();
            console.error('Server Response:', errorResponse);
            alert('There was an issue processing your request. Please try again later.');
            return;
        }

        const result = await response.json();
        if (result.success) {
            alert('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } else {
            console.error('Error Message:', result.message);
            alert(`Error: ${result.message}`);
        }
    } catch (error) {
        console.error('Fetch Error:', error);
        alert('Something went wrong. Please try again.');
    }
};
