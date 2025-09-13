<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
            scroll-behavior: smooth;
        }
        header {
            background: #4CAF50;
            color: white;
            text-align: center;
            padding: 20px 0;
        }
        header img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            margin-top: 10px;
        }
        nav {
            background: #333;
            padding: 10px;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        nav a {
            color: white;
            text-decoration: none;
            margin: 15px;
            font-size: 18px;
        }
        nav a:hover {
            color: #4CAF50;
        }
        section {
            max-width: 900px;
            margin: 20px auto;
            padding: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        h2 {
            color: #4CAF50;
            border-bottom: 2px solid #4CAF50;
            padding-bottom: 5px;
        }
        .skills span {
            display: inline-block;
            background: #4CAF50;
            color: white;
            padding: 5px 10px;
            margin: 5px;
            border-radius: 5px;
        }
        footer {
            text-align: center;
            background: #333;
            color: white;
            padding: 10px 0;
            margin-top: 20px;
        }
        /* Back to top button */
        #backToTop {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            display: none;
            cursor: pointer;
        }
    </style>
</head>
<body>

<header>
    <h1>My Portfolio</h1>
    <h2>S. s.jacquline</h2>
    <p>Computer application Student</p>
    <img src="profile.jpg" alt="Profile Photo">
</header>

<nav>
    <a href="#about">About</a>
    <a href="#education">Education</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
</nav>

<section id="about">
    <h2>About Me</h2>
    <p>Hello! I am s.jacquline , a passionate Computer application student with a strong interest in programming languages like C++ and Python. I enjoy building creative and functional web applications.</p>
</section>

<section id="education">
    <h2>Education</h2>
    <ul>
        <li><b>Bachelor of Computer applicatin</b> - Vidhya Sagar Women's College (2024 - 2027)</li>
        <li><b>High School</b> - government  high school (2022 - 2024)</li>
    </ul>
</section>

<section id="skills" class="skills">
    <h2>Skills</h2>
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>Python</span>
    <span>C++</span>
</section>

<section id="projects">
    <h2>Projects</h2>
    <ul>
        <li><b>Portfolio Website</b> - A responsive personal portfolio using HTML, CSS, and JS.</li>
        <li><b>Student Management System</b> - A Python-based desktop application.</li>
    </ul>
</section>

<section id="contact">
    <h2>Contact</h2>
    <p>Email: <a href="mailto:">.jacqulinesathish@gmail.com jacqulinesathish@gmail.com</a></p>
    <p>Phone: +91-7667889698</p>
    <p>LinkedIn: <a href="#" target="_blank">linkedin.com/in/s.jacquline</a></p>
</section>

<footer>
    <p>&copy; 2025  | All Rights Reserved</p>s.jacquline
</footer>

<!-- Back to Top Button -->
<button id="backToTop">↑ Top</button>

<script>
    // Show "Back to Top" button when scrolling down
    const backToTop = document.getElementById('backToTop');
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    };

    // Scroll to top when button clicked
    backToTop.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
</script>

</body>
</html>