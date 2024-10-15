<!DOCTYPE>
<html lang="en">
<head>
    <title>Introduction to Java</title>
    <style>
        @font-face {
            font-family: 'Roboto';
            src: url('Roboto-Regular.woff2') format('woff2'),
                 url('Roboto-Regular.woff') format('woff'),
                 url('Roboto-Bold.woff2') format('woff2'),
                 url('Roboto-Bold.woff') format('woff');
            font-weight: 400;
            font-style: normal;
        }

        body {
            margin: 0;
            font-family: 'Roboto', sans-serif;
            color: #ffffff;
            background-color: #1e1e1e;
            line-height: 1.6;
            user-select: none;
        }

        .header-container {
            max-width: 900px; 
            margin: 40px auto 0;
            padding: 0 20px; 
        }

        @keyframes colorChange {
            0% { color: #00bfff; }
            50% { color: #ffffff; }
            100% { color: #00bfff; }
        }

        .header-container h1 {
            text-align: center;
            padding: 20px;
            border: 3px solid #00bfff;
            border-radius: 8px;
            margin-bottom: 40px;
            animation: colorChange 4s infinite;
            transition: border-color 0.3s ease;
        }

        .header-container h1:hover {
            border-color: #ffffff;
        }

        .btn-group {
            text-align: center;
            margin: 20px 0;
        }

        .btn-group button {
            background-color: #333;
            border: none;
            color: white;
            padding: 15px 30px;
            cursor: pointer;
            margin: 0 10px;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease, color 0.3s ease;
        }

        .btn-group button:hover {
            background-color: #555;
            transform: translateY(-2px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.5);
            color: #00bfff;
        }

        section {
            max-width: 800px;
            margin: 20px auto;
            padding: 40px;
            background-color: #282828;
            border-radius: 10px;
            margin-bottom: 40px;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
        }

        section h1 {
            margin-top: 0;
            color: #00bfff;
            border: 2px solid #00bfff;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
            transition: color 0.3s ease, border-color 0.3s ease;
        }

        section h1:hover {
            color: #ffffff;
            border-color: #ffffff;
        }

        section p {
            text-align: left;
        }

        footer {
            text-align: center;
            padding: 20px;
            background-color: #333;
            color: #ffffff;
            position: relative;
            bottom: 0;
            width: 100%;
            transition: background-color 0.3s ease;
        }

        footer:hover {
            background-color: #444;
        }
    </style>
</head>
<body>
    <div class="header-container">
        <h1>Introduction to Java</h1>
    </div>
    <div class="btn-group">
        <button onclick="smoothScroll('founder')">Founder</button>
        <button onclick="smoothScroll('history')">History</button>
        <button onclick="smoothScroll('about')">About</button>
    </div>

    <section id="founder">
        <h1>Founder</h1>
		<h2>James Gosling - founder of java</h2>
		<p><b>Currently, Java is used in internet programming, mobile devices, games, e-business solutions, etc.</b></p>
		<p>James Gosling OC (born 19 May 1955) is a Canadian computer scientist, best known as the founder and lead designer behind the Java programming language. Gosling was elected a member of the National Academy of Engineering in 2004 for the conception and development of the architecture for the Java programming language and for contributions to window systems.</p>
    </section>

    <section id="history">
        <h1>History</h1>
		<p><b>Following are given significant points that describe the history of Java.</b></p>
		<p>It was originally developed by James Gosling at Sun Microsystems. It was released in May 1995 as a core component of Sun's Java platform. The original and reference implementation Java compilers, virtual machines, and class libraries were originally released by Sun under proprietary licenses.</p>
		<p>In June 1991, James Gosling, Mike Sheridan, and Patrick Naughton started work on the Java language. The Green Team is a tiny group of solar engineers. It was first created for tiny embedded systems found in set-top boxes and other electronic appliances.</p>
		<p>The file extension was.gt, and James Gosling dubbed it "Greentalk" to start. In 1995, Oak was renamed as "Java" because it was already a trademark by Oak Technologies. Following that, it was created as a component of the Green project and given the name Oak. Why Oak? Many nations, including the United States, France, Germany, and Rome, have designated oaks as their national trees, representing strength.</p>
    </section>

    <section id="about">
        <h1>About</h1>
        <p><b>Java is a high-level, object-oriented programming language that's independent of the platform. Hence, programs developed in Java can be executed on any platform supporting Java without recompilation. Sun Microsystems came up with Java in 1995, now owned by Oracle, largely used for enterprise applications, mobile development-mainly Android, web applications, cloud-based solutions, among so many others.</b></p>
        <h2>Java Essential Features</h2>
        <p>Platform Independence (WORA): Java applications compiled code can run on any computer system featuring an interpreter known as a Virtual Machine (JVM). This is also referred to as "Write Once, Run Anywhere" (WORA).</p>
        <p>Object-Oriented: Java supports the fundamental concepts of object-oriented programming (OOP) like inheritance, encapsulation, polymorphism, and abstraction.</p>
        <p>Robust and Secure: Java's strong memory management, exception handling, and built-in security features make it a robust choice for critical applications.</p>
        <p>Multithreading: Java is fully integrated with multi-threaded programming and allows developers to write applications that can perform many tasks at once.</p>
        <p>Garbage Collection or Automatic Memory Management: Java automatically makes memory allocations and de-allocation by the garbage collector, thus limiting the chances of memory leaks.</p>
        <p>Libraries and APIs: Java is releasing a complete set of libraries and APIs that ease development of almost everything like networking, file handling, database connectivity, and even design of user interfaces.</p>
        <p>Java Virtual Machine: It is the engine that enables the applications to run. The virtual machine abstractive type of underlying operating system and, hence, extends integrity of platform independence to Java.</p>
        <p>Java Development Kit (JDK): The JDK consists of all tools - the Java compiler (javac), Java runtime JRE, and libraries and are needful to carry out the implementing of Java.</p>
        <h2>Java Editions:</h2>
        <p>Java SE (Standard Edition): This part of Java is that includes all features of the language and standard libraries, generally used for desktop apps, server-side applications, etc.</p>
        <p>Java EE (Enterprise Edition): It compiles features that are related to large applications, such as distributed computing, web services, and systems development at an enterprise scale.</p>
        <p>Java ME (Micro Edition): It's a light version of Java designed to use mobile devices, embedded systems, and IoT-related applications.</p>
        <h2>Popular Java frameworks:</h2>
        <p>Spring: It is a full-fledged framework that is used to create enterprise-level applications with several capacities related to injecting dependencies, aspect-oriented programming, and transaction management.</p>
        <p>Hibernate: ORM tool, which makes database operations simpler by mapping Java classes to database tables.</p>
        <p>JavaFX: Provides developers with a platform for developing rich Internet applications based on features like 3D graphics, media streaming, and user interface components.</p>
        <p>Apache Struts: A framework to build a web application that is modeled in the MVC pattern.</p>
        <h2>Use Cases:</h2>
        <p>Web Applications: Java is used to power most of the large-scale websites and web services.</p>
        <p>Development of Android: Most applications on Android are written using Java.</p>
        <p>This technology is highly used in the very large enterprise systems, such as banking software, CRM platforms, and other financial services.</p>
        <p>Big Data: Big data solutions largely use Apache Hadoop and Apache Kafka frameworks.</p>
        <p>Scientific Computing: Java is applied to those applications that require large-scale computation and complex algorithms.</p>
        <p><b>Overall, Java is still one of the topmost programming languages, mainly because of its versatility, scalability, and good community support.</b></p>
    </section>

    <footer>
        &copy; 2024 Introduction to Java. All rights reserved.
    </footer>

    <script>
        function smoothScroll(targetId) {
            const target = document.getElementById(targetId);
            target.scrollIntoView({ behavior: 'smooth' });
        }

        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    </script>
</body>
</html>
