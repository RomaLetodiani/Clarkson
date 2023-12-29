        // Function to load the appropriate HTML content based on screen size
        function loadContent() {
            if (window.innerWidth > 1024) {
                // Load the content for larger screens
                fetch('index.html')
                    .then(response => response.text())
                    .then(data => {
                        document.getElementById('main').innerHTML = data;
                    });
            } else {
                // Load the content for smaller screens
                fetch('header.html')
                    .then(response => response.text())
                    .then(data => {
                        document.getElementById('main').innerHTML = data;
                    });
            }
        }

        // Call the function initially
        window.addEventListener('load', loadContent);

        // Call the function when the window is resized
        window.addEventListener('resize', loadContent);