// IP Detection Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get IP address using a free API
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('user-ip').textContent = data.ip;
            
            // Get additional IP details (using ipapi.co)
            return fetch(`https://ipapi.co/${data.ip}/json/`);
        })
        .then(response => response.json())
        .then(ipDetails => {
            const location = `${ipDetails.city}, ${ipDetails.region}, ${ipDetails.country_name}`;
            document.getElementById('ip-location').textContent = location;
            document.getElementById('ip-isp').textContent = ipDetails.org || 'Unknown';
        })
        .catch(error => {
            console.error('Error fetching IP details:', error);
            document.getElementById('user-ip').textContent = 'Error loading IP';
        });
});