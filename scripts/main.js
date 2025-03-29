// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Hide preloader after 3 seconds
    setTimeout(function() {
        document.querySelector('.preloader').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.preloader').style.display = 'none';
            // Start matrix animation after preloader
            startMatrixAnimation();
        }, 500);
    }, 3000);

    // Initialize tab functionality
    initTabs();
    
    // Load YouTubers data
    loadYouTubers();
    
    // Load Tools data
    loadTools();
    
    // Initialize quiz
    initQuiz();
    
    // Initialize AI assistant
    initAIAssistant();
    
    // Initialize IP tool button
    initIPToolButton();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize tooltips
    initTooltips();
});

// Matrix Animation
function startMatrixAnimation() {
    const matrixContainer = document.querySelector('.matrix-animation');
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    function createMatrixStream() {
        const stream = document.createElement('div');
        stream.className = 'matrix-character';
        stream.style.left = Math.random() * 100 + 'vw';
        stream.style.animationDuration = (Math.random() * 5 + 3) + 's';
        stream.style.animationDelay = (Math.random() * 2) + 's';
        
        // Create multiple characters in the stream
        const charCount = Math.floor(Math.random() * 20) + 10;
        for (let i = 0; i < charCount; i++) {
            const char = document.createElement('span');
            char.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
            char.style.opacity = Math.random() * 0.5 + 0.1;
            char.style.filter = `brightness(${Math.random() * 2 + 1})`;
            stream.appendChild(char);
            stream.appendChild(document.createElement('br'));
        }
        
        matrixContainer.appendChild(stream);
        
        // Remove stream after animation completes
        setTimeout(() => {
            stream.remove();
        }, parseFloat(stream.style.animationDuration) * 1000);
    }
    
    // Create multiple streams
    setInterval(createMatrixStream, 200);
    
    // Initial streams
    for (let i = 0; i < 20; i++) {
        setTimeout(createMatrixStream, i * 100);
    }
}

// Tab Functionality
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Load YouTubers Data
function loadYouTubers() {
    const youtubers = [
        {
            name: "The Cyber Mentor",
            image: "images/youtubers/cybermentor.jpg",
            subscribers: "500K+",
            description: "Heath Adams, aka The Cyber Mentor, provides practical cybersecurity training with a focus on ethical hacking and penetration testing.",
            courses: [
                "Practical Ethical Hacking",
                "Windows Privilege Escalation",
                "Linux Privilege Escalation",
                "OSCP Preparation"
            ],
            link: "https://youtube.com/thecybermentor"
        },
        {
            name: "Null Byte",
            image: "images/youtubers/nullbyte.jpg",
            subscribers: "1M+",
            description: "Null Byte offers hacking and cybersecurity tutorials for beginners and advanced users alike, covering a wide range of topics.",
            courses: [
                "Wi-Fi Hacking Series",
                "Metasploit Framework",
                "Social Engineering",
                "Python for Hackers"
            ],
            link: "https://youtube.com/nullbyte"
        },
        {
            name: "Hak5",
            image: "images/youtubers/hak5.jpg",
            subscribers: "800K+",
            description: "Hak5 is known for their penetration testing gear and tutorials on tools like the Rubber Ducky and WiFi Pineapple.",
            courses: [
                "Payload Development",
                "Physical Security Testing",
                "Network Penetration Testing",
                "Red Team Operations"
            ],
            link: "https://youtube.com/hak5"
        },
        {
            name: "John Hammond",
            image: "images/youtubers/johnhammond.jpg",
            subscribers: "300K+",
            description: "John Hammond creates content focused on malware analysis, capture the flag (CTF) challenges, and cybersecurity news.",
            courses: [
                "Malware Analysis",
                "CTF Walkthroughs",
                "Python Scripting",
                "Digital Forensics"
            ],
            link: "https://youtube.com/johnhammond"
        },
        {
            name: "LiveOverflow",
            image: "images/youtubers/liveoverflow.jpg",
            subscribers: "400K+",
            description: "LiveOverflow creates in-depth technical content about binary exploitation, reverse engineering, and security research.",
            courses: [
                "Binary Exploitation",
                "Reverse Engineering",
                "Browser Security",
                "Memory Corruption"
            ],
            link: "https://youtube.com/liveoverflow"
        },
        {
            name: "NetworkChuck",
            image: "images/youtubers/networkchuck.jpg",
            subscribers: "1.5M+",
            description: "NetworkChuck makes networking and cybersecurity concepts accessible with energetic and engaging tutorials.",
            courses: [
                "CCNA Complete Course",
                "Ethical Hacking",
                "Kali Linux",
                "Home Lab Setup"
            ],
            link: "https://youtube.com/networkchuck"
        },
        {
            name: "David Bombal",
            image: "images/youtubers/davidbombal.jpg",
            subscribers: "700K+",
            description: "David Bombal covers networking, Python, ethical hacking, and cybersecurity with practical examples and interviews.",
            courses: [
                "Python for Networking",
                "Packet Analysis",
                "Cisco Security",
                "Ethical Hacking Labs"
            ],
            link: "https://youtube.com/davidbombal"
        },
        {
            name: "IppSec",
            image: "images/youtubers/ippsec.jpg",
            subscribers: "200K+",
            description: "IppSec creates detailed walkthroughs of HackTheBox machines, demonstrating penetration testing techniques.",
            courses: [
                "HackTheBox Walkthroughs",
                "Privilege Escalation",
                "Web Application Hacking",
                "Active Directory Attacks"
            ],
            link: "https://youtube.com/ippsec"
        },
        {
            name: "STÖK",
            image: "images/youtubers/stok.jpg",
            subscribers: "150K+",
            description: "STÖK focuses on bug bounty hunting, web application security, and advanced penetration testing techniques.",
            courses: [
                "Bug Bounty Hunting",
                "Web App Pentesting",
                "API Security",
                "Advanced XSS"
            ],
            link: "https://youtube.com/stokfredrik"
        },
        {
            name: "The PC Security Channel",
            image: "images/youtubers/pcsecurity.jpg",
            subscribers: "250K+",
            description: "TPSC tests and reviews security software while providing practical security advice for everyday users.",
            courses: [
                "Malware Testing",
                "Antivirus Reviews",
                "Ransomware Protection",
                "Privacy Tools"
            ],
            link: "https://youtube.com/thepcsecuritychannel"
        },
        {
            name: "13Cubed",
            image: "images/youtubers/13cubed.jpg",
            subscribers: "100K+",
            description: "13Cubed creates content focused on digital forensics, incident response, and malware analysis.",
            courses: [
                "Digital Forensics",
                "Memory Analysis",
                "Incident Response",
                "Windows Forensics"
            ],
            link: "https://youtube.com/13cubed"
        },
        {
            name: "Security Now",
            image: "images/youtubers/securitynow.jpg",
            subscribers: "300K+",
            description: "Steve Gibson and Leo Laporte discuss the latest security news, vulnerabilities, and privacy issues in this long-running show.",
            courses: [
                "Security News Analysis",
                "Encryption Explained",
                "Privacy Deep Dives",
                "Vulnerability Breakdowns"
            ],
            link: "https://youtube.com/securitynow"
        },
        {
            name: "Black Hat",
            image: "images/youtubers/blackhat.jpg",
            subscribers: "200K+",
            description: "Official channel of Black Hat conferences, featuring talks from top security researchers and professionals.",
            courses: [
                "Conference Talks",
                "Cutting-Edge Research",
                "Zero-Day Exploits",
                "Security Trends"
            ],
            link: "https://youtube.com/blackhat"
        },
        {
            name: "DEFCONConference",
            image: "images/youtubers/defcon.jpg",
            subscribers: "400K+",
            description: "Official DEF CON channel featuring talks from the world's largest hacker conference.",
            courses: [
                "Hacker Conference Talks",
                "Security Research",
                "Lockpicking",
                "Social Engineering"
            ],
            link: "https://youtube.com/defconconference"
        },
        {
            name: "Cyberspatial",
            image: "images/youtubers/cyberspatial.jpg",
            subscribers: "50K+",
            description: "Cyberspatial focuses on OSINT (Open Source Intelligence) techniques and tools for investigations.",
            courses: [
                "OSINT Techniques",
                "Geolocation",
                "Social Media Investigation",
                "Dark Web Exploration"
            ],
            link: "https://youtube.com/cyberspatial"
        },
        {
            name: "The XSS Rat",
            image: "images/youtubers/xssrat.jpg",
            subscribers: "30K+",
            description: "Specializing in web application security with a focus on XSS and other client-side vulnerabilities.",
            courses: [
                "Advanced XSS",
                "DOM Vulnerabilities",
                "Content Security Policy",
                "Web App Hacking"
            ],
            link: "https://youtube.com/thexssrat"
        },
        {
            name: "HackerSploit",
            image: "images/youtubers/hackersploit.jpg",
            subscribers: "200K+",
            description: "HackerSploit provides tutorials on penetration testing, ethical hacking, and cybersecurity tools.",
            courses: [
                "Kali Linux Tutorials",
                "Metasploit Framework",
                "Python for Pentesting",
                "Web App Security"
            ],
            link: "https://youtube.com/hackersploit"
        },
        {
            name: "Bugcrowd",
            image: "images/youtubers/bugcrowd.jpg",
            subscribers: "20K+",
            description: "Official Bugcrowd channel with content about bug bounty hunting and responsible disclosure.",
            courses: [
                "Bug Bounty Basics",
                "Web App Testing",
                "Mobile Security",
                "Bug Hunting Tips"
            ],
            link: "https://youtube.com/bugcrowd"
        },
        {
            name: "OWASP Foundation",
            image: "images/youtubers/owasp.jpg",
            subscribers: "15K+",
            description: "Official channel of OWASP with content about web application security and secure coding practices.",
            courses: [
                "OWASP Top 10",
                "Secure Coding",
                "Web App Security",
                "API Security"
            ],
            link: "https://youtube.com/owaspglobal"
        },
        {
            name: "zSecurity",
            image: "images/youtubers/zsecurity.jpg",
            subscribers: "250K+",
            description: "zSecurity offers courses on ethical hacking, penetration testing, and cybersecurity career advice.",
            courses: [
                "Ethical Hacking Course",
                "Metasploit Mastery",
                "Social Engineering",
                "Career in Cybersecurity"
            ],
            link: "https://youtube.com/zsecurity"
        }
    ];

    const container = document.getElementById('youtuber-container');
    
    youtubers.forEach(youtuber => {
        const card = document.createElement('div');
        card.className = 'youtuber-card section-entrance';
        
        card.innerHTML = `
            <div class="youtuber-img">
                <img src="${youtuber.image}" alt="${youtuber.name}">
            </div>
            <div class="youtuber-info">
                <h3 class="youtuber-name">${youtuber.name}</h3>
                <div class="youtuber-subs">
                    <i class="fas fa-users"></i>
                    <span>${youtuber.subscribers} subscribers</span>
                </div>
                <p class="youtuber-desc">${youtuber.description}</p>
                <div class="youtuber-courses">
                    <p class="course-title">Popular Courses/Series:</p>
                    <ul class="course-list">
                        ${youtuber.courses.map(course => `<li>${course}</li>`).join('')}
                    </ul>
                </div>
                <a href="${youtuber.link}" target="_blank" class="youtuber-link">
                    <i class="fab fa-youtube"></i> Visit Channel
                </a>
            </div>
        `;
        
        container.appendChild(card);
    });
    
    // Animate cards on scroll
    animateOnScroll('.youtuber-card');
}

// Load Tools Data
function loadTools() {
    const tools = {
        pentesting: [
            {
                name: "Kali Linux",
                image: "images/tools/kali.jpg",
                category: "Penetration Testing OS",
                description: "Kali Linux is a Debian-derived Linux distribution designed for digital forensics and penetration testing.",
                uses: [
                    "Pre-installed with hundreds of penetration testing tools",
                    "Used for vulnerability assessment",
                    "Security research and testing",
                    "Digital forensics investigations"
                ],
                links: [
                    { type: "website", url: "https://www.kali.org/" },
                    { type: "docs", url: "https://www.kali.org/docs/" }
                ]
            },
            {
                name: "Metasploit Framework",
                image: "images/tools/metasploit.jpg",
                category: "Exploitation Framework",
                description: "The Metasploit Framework is a penetration testing platform that enables you to find, exploit, and validate vulnerabilities.",
                uses: [
                    "Developing and executing exploit code",
                    "Post-exploitation tasks",
                    "Security vulnerability validation",
                    "Creating security testing tools"
                ],
                links: [
                    { type: "website", url: "https://www.metasploit.com/" },
                    { type: "docs", url: "https://docs.rapid7.com/metasploit/" }
                ]
            },
            {
                name: "Burp Suite",
                image: "images/tools/burp.jpg",
                category: "Web Application Testing",
                description: "Burp Suite is an integrated platform for performing security testing of web applications.",
                uses: [
                    "Web vulnerability scanning",
                    "Manual web app testing",
                    "Automated crawling",
                    "API security testing"
                ],
                links: [
                    { type: "website", url: "https://portswigger.net/burp" },
                    { type: "docs", url: "https://portswigger.net/burp/documentation" }
                ]
            },
            {
                name: "Nmap",
                image: "images/tools/nmap.jpg",
                category: "Network Scanner",
                description: "Nmap (Network Mapper) is a free and open-source utility for network discovery and security auditing.",
                uses: [
                    "Network inventory",
                    "Service uptime monitoring",
                    "Host discovery",
                    "Security auditing"
                ],
                links: [
                    { type: "website", url: "https://nmap.org/" },
                    { type: "docs", url: "https://nmap.org/book/" }
                ]
            },
            {
                name: "Wireshark",
                image: "images/tools/wireshark.jpg",
                category: "Network Protocol Analyzer",
                description: "Wireshark is a network protocol analyzer that lets you capture and interactively browse the traffic running on a computer network.",
                uses: [
                    "Network troubleshooting",
                    "Analysis of network protocols",
                    "Security incident investigation",
                    "Network forensics"
                ],
                links: [
                    { type: "website", url: "https://www.wireshark.org/" },
                    { type: "docs", url: "https://www.wireshark.org/docs/" }
                ]
            }
        ],
        forensics: [
            {
                name: "Autopsy",
                image: "images/tools/autopsy.jpg",
                category: "Digital Forensics",
                description: "Autopsy is a digital forensics platform and graphical interface to The Sleuth Kit and other digital forensics tools.",
                uses: [
                    "Disk image analysis",
                    "File system forensics",
                    "Timeline analysis",
                    "Registry analysis"
                ],
                links: [
                    { type: "website", url: "https://www.autopsy.com/" },
                    { type: "docs", url: "https://www.autopsy.com/user-guide/" }
                ]
            },
            {
                name: "Volatility",
                image: "images/tools/volatility.jpg",
                category: "Memory Forensics",
                description: "Volatility is an advanced memory forensics framework for incident response and malware analysis.",
                uses: [
                    "Memory dump analysis",
                    "Malware detection",
                    "Incident response",
                    "Process and network analysis"
                ],
                links: [
                    { type: "website", url: "https://www.volatilityfoundation.org/" },
                    { type: "docs", url: "https://github.com/volatilityfoundation/volatility/wiki" }
                ]
            },
            {
                name: "FTK Imager",
                image: "images/tools/ftk.jpg",
                category: "Forensic Imaging",
                description: "FTK Imager is a data preview and imaging tool that lets you quickly assess electronic evidence.",
                uses: [
                    "Creating forensic images",
                    "Previewing files and folders",
                    "Exporting files from forensic images",
                    "Recovering deleted files"
                ],
                links: [
                    { type: "website", url: "https://www.exterro.com/ftk-imager" },
                    { type: "docs", url: "https://www.exterro.com/learn/ftk-imager" }
                ]
            },
            {
                name: "The Sleuth Kit",
                image: "images/tools/sleuthkit.jpg",
                category: "File System Analysis",
                description: "The Sleuth Kit is a library and collection of command-line tools for investigating disk images.",
                uses: [
                    "File system analysis",
                    "Recovering deleted files",
                    "Timeline generation",
                    "Disk image analysis"
                ],
                links: [
                    { type: "website", url: "https://www.sleuthkit.org/" },
                    { type: "docs", url: "https://www.sleuthkit.org/sleuthkit/docs/" }
                ]
            },
            {
                name: "Caine",
                image: "images/tools/caine.jpg",
                category: "Forensics OS",
                description: "CAINE (Computer Aided INvestigative Environment) is a Linux distribution for digital forensics.",
                uses: [
                    "Digital forensics investigations",
                    "Evidence preservation",
                    "Forensic analysis",
                    "Incident response"
                ],
                links: [
                    { type: "website", url: "https://www.caine-live.net/" },
                    { type: "docs", url: "https://www.caine-live.net/page/docs/" }
                ]
            }
        ],
        network: [
            {
                name: "Snort",
                image: "images/tools/snort.jpg",
                category: "Intrusion Detection",
                description: "Snort is an open-source network intrusion detection system capable of real-time traffic analysis.",
                uses: [
                    "Network intrusion detection",
                    "Packet logging",
                    "Protocol analysis",
                    "Content searching"
                ],
                links: [
                    { type: "website", url: "https://www.snort.org/" },
                    { type: "docs", url: "https://www.snort.org/documents" }
                ]
            },
            {
                name: "Zeek",
                image: "images/tools/zeek.jpg",
                category: "Network Analysis",
                description: "Zeek is a powerful network analysis framework that is much different from the typical IDS.",
                uses: [
                    "Network security monitoring",
                    "Traffic analysis",
                    "Anomaly detection",
                    "Forensic investigations"
                ],
                links: [
                    { type: "website", url: "https://zeek.org/" },
                    { type: "docs", url: "https://docs.zeek.org/en/current/" }
                ]
            },
            {
                name: "pfSense",
                image: "images/tools/pfsense.jpg",
                category: "Firewall/Router",
                description: "pfSense is a free and open-source firewall and router that also features unified threat management.",
                uses: [
                    "Network firewall",
                    "VPN gateway",
                    "Traffic shaping",
                    "Intrusion detection"
                ],
                links: [
                    { type: "website", url: "https://www.pfsense.org/" },
                    { type: "docs", url: "https://docs.netgate.com/pfsense/en/latest/" }
                ]
            },
            {
                name: "OpenVAS",
                image: "images/tools/openvas.jpg",
                category: "Vulnerability Scanner",
                description: "OpenVAS is a full-featured vulnerability scanner that can detect security issues in networks and systems.",
                uses: [
                    "Vulnerability assessment",
                    "Security auditing",
                    "Compliance testing",
                    "Patch management"
                ],
                links: [
                    { type: "website", url: "https://www.openvas.org/" },
                    { type: "docs", url: "https://www.openvas.org/documentation.html" }
                ]
            },
            {
                name: "Aircrack-ng",
                image: "images/tools/aircrack.jpg",
                category: "WiFi Security",
                description: "Aircrack-ng is a complete suite of tools to assess WiFi network security.",
                uses: [
                    "WiFi network monitoring",
                    "Packet capturing",
                    "Password cracking",
                    "Security testing"
                ],
                links: [
                    { type: "website", url: "https://www.aircrack-ng.org/" },
                    { type: "docs", url: "https://www.aircrack-ng.org/doku.php" }
                ]
            }
        ],
        cryptography: [
            {
                name: "GnuPG",
                image: "images/tools/gnupg.jpg",
                category: "Encryption",
                description: "GnuPG (GNU Privacy Guard) is a complete and free implementation of the OpenPGP standard.",
                uses: [
                    "Email encryption",
                    "File encryption",
                    "Digital signatures",
                    "Key management"
                ],
                links: [
                    { type: "website", url: "https://gnupg.org/" },
                    { type: "docs", url: "https://gnupg.org/documentation/" }
                ]
            },
            {
                name: "OpenSSL",
                image: "images/tools/openssl.jpg",
                category: "Cryptography Library",
                description: "OpenSSL is a robust, commercial-grade, and full-featured toolkit for TLS and SSL protocols.",
                uses: [
                    "SSL/TLS implementation",
                    "Certificate management",
                    "Cryptographic functions",
                    "Secure communications"
                ],
                links: [
                    { type: "website", url: "https://www.openssl.org/" },
                    { type: "docs", url: "https://www.openssl.org/docs/" }
                ]
            },
            {
                name: "Hashcat",
                image: "images/tools/hashcat.jpg",
                category: "Password Cracking",
                description: "Hashcat is the world's fastest and most advanced password recovery utility.",
                uses: [
                    "Password recovery",
                    "Hash cracking",
                    "Security auditing",
                    "Penetration testing"
                ],
                links: [
                    { type: "website", url: "https://hashcat.net/hashcat/" },
                    { type: "docs", url: "https://hashcat.net/wiki/" }
                ]
            },
            {
                name: "John the Ripper",
                image: "images/tools/john.jpg",
                category: "Password Cracking",
                description: "John the Ripper is a fast password cracker, currently available for many flavors of Unix, Windows, DOS, and OpenVMS.",
                uses: [
                    "Password strength testing",
                    "Security auditing",
                    "Hash cracking",
                    "Penetration testing"
                ],
                links: [
                    { type: "website", url: "https://www.openwall.com/john/" },
                    { type: "docs", url: "https://www.openwall.com/john/doc/" }
                ]
            },
            {
                name: "TrueCrypt/VeraCrypt",
                image: "images/tools/veracrypt.jpg",
                category: "Disk Encryption",
                description: "VeraCrypt is a free open-source disk encryption software for Windows, Mac OSX and Linux.",
                uses: [
                    "Full disk encryption",
                    "Hidden volumes",
                    "File container encryption",
                    "Pre-boot authentication"
                ],
                links: [
                    { type: "website", url: "https://www.veracrypt.fr/" },
                    { type: "docs", url: "https://www.veracrypt.fr/en/Documentation.html" }
                ]
            }
        ]
    };

    // Load tools into each tab
    for (const category in tools) {
        const container = document.getElementById(category);
        
        tools[category].forEach(tool => {
            const card = document.createElement('div');
            card.className = 'tool-card section-entrance';
            
            let linksHTML = '';
            tool.links.forEach(link => {
                let icon, className;
                if (link.type === 'website') {
                    icon = 'fas fa-external-link-alt';
                    className = '';
                } else if (link.type === 'docs') {
                    icon = 'fas fa-book';
                    className = 'docs';
                } else if (link.type === 'github') {
                    icon = 'fab fa-github';
                    className = 'github';
                }
                
                linksHTML += `
                    <a href="${link.url}" target="_blank" class="tool-link ${className}">
                        <i class="${icon}"></i> ${link.type.charAt(0).toUpperCase() + link.type.slice(1)}
                    </a>
                `;
            });
            
            card.innerHTML = `
                <div class="tool-img">
                    <img src="${tool.image}" alt="${tool.name}">
                </div>
                <div class="tool-info">
                    <h3 class="tool-name">${tool.name}</h3>
                    <span class="tool-category">${tool.category}</span>
                    <p class="tool-desc">${tool.description}</p>
                    <div class="tool-uses">
                        <p class="uses-title">Primary Uses:</p>
                        <ul class="uses-list">
                            ${tool.uses.map(use => `<li>${use}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="tool-links">
                        ${linksHTML}
                    </div>
                </div>
            `;
            
            container.appendChild(card);
        });
        
        // Animate cards on scroll
        animateOnScroll(`#${category} .tool-card`);
    }
}

// Initialize Quiz
function initQuiz() {
    const quizQuestions = [
        {
            question: "What is the most common type of cyber attack?",
            options: [
                "Phishing",
                "DDoS",
                "SQL Injection",
                "Zero-day exploit"
            ],
            answer: 0
        },
        {
            question: "Which of these is NOT a valid password hashing algorithm?",
            options: [
                "MD5",
                "SHA-256",
                "bcrypt",
                "AES"
            ],
            answer: 3
        },
        {
            question: "What does the 'C' in CIA triad stand for?",
            options: [
                "Confidentiality",
                "Cryptography",
                "Cybersecurity",
                "Certification"
            ],
            answer: 0
        },
        {
            question: "Which port is typically used for HTTPS traffic?",
            options: [
                "80",
                "443",
                "22",
                "3389"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of a VPN?",
            options: [
                "To encrypt internet traffic",
                "To block malware",
                "To scan for vulnerabilities",
                "To monitor network traffic"
            ],
            answer: 0
        },
        {
            question: "Which of these is a type of social engineering attack?",
            options: [
                "Phishing",
                "SQL Injection",
                "Cross-site Scripting",
                "Buffer Overflow"
            ],
            answer: 0
        },
        {
            question: "What does IDS stand for in cybersecurity?",
            options: [
                "Intrusion Detection System",
                "Internet Defense System",
                "Identity Security Service",
                "Integrated Data Security"
            ],
            answer: 0
        },
        {
            question: "Which of these is NOT a principle of secure design?",
            options: [
                "Least privilege",
                "Defense in depth",
                "Security through obscurity",
                "Fail securely"
            ],
            answer: 2
        },
        {
            question: "What is the main purpose of a firewall?",
            options: [
                "To monitor and control network traffic",
                "To encrypt data in transit",
                "To detect malware",
                "To authenticate users"
            ],
            answer: 0
        },
        {
            question: "Which of these is a common web application vulnerability?",
            options: [
                "Cross-Site Scripting (XSS)",
                "Distributed Denial of Service (DDoS)",
                "Man-in-the-Middle (MitM)",
                "Advanced Persistent Threat (APT)"
            ],
            answer: 0
        }
    ];

    const questionText = document.getElementById('question-text');
    const questionNumber = document.getElementById('question-number');
    const optionsContainer = document.getElementById('options-container');
    const prevButton = document.querySelector('.quiz-prev');
    const nextButton = document.querySelector('.quiz-next');
    const progressBar = document.querySelector('.progress-bar::after');
    
    let currentQuestion = 0;
    let selectedOption = null;
    let userAnswers = Array(quizQuestions.length).fill(null);
    
    function loadQuestion(index) {
        const question = quizQuestions[index];
        questionText.textContent = question.question;
        questionNumber.textContent = index + 1;
        
        optionsContainer.innerHTML = '';
        question.options.forEach((option, i) => {
            const optionElement = document.createElement('button');
            optionElement.className = 'quiz-option';
            if (userAnswers[index] === i) {
                optionElement.classList.add('selected');
            }
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => selectOption(i));
            optionsContainer.appendChild(optionElement);
        });
        
        // Update progress bar
        document.querySelector('.progress-bar::after').style.width = `${((index + 1) / quizQuestions.length) * 100}%`;
        
        // Update navigation buttons
        prevButton.disabled = index === 0;
        nextButton.textContent = index === quizQuestions.length - 1 ? 'Finish' : 'Next';
    }
    
    function selectOption(index) {
        // Remove selected class from all options
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // Add selected class to clicked option
        document.querySelectorAll('.quiz-option')[index].classList.add('selected');
        selectedOption = index;
        userAnswers[currentQuestion] = index;
    }
    
    prevButton.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            loadQuestion(currentQuestion);
        }
    });
    
    nextButton.addEventListener('click', () => {
        if (currentQuestion < quizQuestions.length - 1) {
            currentQuestion++;
            loadQuestion(currentQuestion);
        } else {
            // Quiz finished
            calculateScore();
        }
    });
    
    function calculateScore() {
        let score = 0;
        for (let i = 0; i < quizQuestions.length; i++) {
            if (userAnswers[i] === quizQuestions[i].answer) {
                score++;
            }
        }
        
        const percentage = (score / quizQuestions.length) * 100;
        let message;
        
        if (percentage >= 80) {
            message = `Excellent! You scored ${score}/${quizQuestions.length}. You have advanced cybersecurity knowledge.`;
        } else if (percentage >= 60) {
            message = `Good job! You scored ${score}/${quizQuestions.length}. You have intermediate cybersecurity knowledge.`;
        } else if (percentage >= 40) {
            message = `Not bad! You scored ${score}/${quizQuestions.length}. Keep learning to improve your cybersecurity skills.`;
        } else {
            message = `You scored ${score}/${quizQuestions.length}. Consider exploring our resources to learn more about cybersecurity.`;
        }
        
        // Show results
        questionText.textContent = message;
        questionNumber.textContent = 'Results';
        optionsContainer.innerHTML = '';
        prevButton.style.display = 'none';
        nextButton.textContent = 'Restart Quiz';
        nextButton.addEventListener('click', () => {
            currentQuestion = 0;
            userAnswers = Array(quizQuestions.length).fill(null);
            loadQuestion(currentQuestion);
            prevButton.style.display = 'block';
            nextButton.textContent = 'Next';
        }, { once: true });
    }
    
    // Load first question
    loadQuestion(currentQuestion);
}

// Initialize AI Assistant
function initAIAssistant() {
    const aiInput = document.querySelector('.ai-input input');
    const aiSend = document.querySelector('.ai-send');
    const aiChat = document.querySelector('.ai-chat');
    
    const responses = [
        "Phishing is a cyber attack that uses disguised email as a weapon. The goal is to trick the email recipient into believing that the message is something they want or need and to click a link or download an attachment.",
        "A VPN (Virtual Private Network) encrypts your internet connection to secure it from eavesdropping, censorship, and other attacks. It's especially useful on public WiFi networks.",
        "The CIA triad stands for Confidentiality, Integrity, and Availability - the three core principles of information security.",
        "Kali Linux is a Debian-based distribution that comes pre-installed with hundreds of penetration testing tools. It's widely used by security professionals.",
        "Two-factor authentication (2FA) adds an extra layer of security by requiring two forms of identification before granting access.",
        "A zero-day vulnerability is a software flaw that is unknown to the vendor and for which no patch is available, making it particularly dangerous.",
        "Ethical hacking involves legally breaking into computers and devices to test an organization's defenses.",
        "The OWASP Top 10 is a standard awareness document representing the most critical security risks to web applications.",
        "Nmap is a powerful network scanning tool used to discover hosts and services on a computer network.",
        "Metasploit is a penetration testing framework that makes hacking simple. It's used by security professionals to test system vulnerabilities."
    ];
    
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ${isUser ? 'user-message' : ''}`;
        messageDiv.innerHTML = `<p>${text}</p>`;
        aiChat.appendChild(messageDiv);
        aiChat.scrollTop = aiChat.scrollHeight;
    }
    
    function getAIResponse(question) {
        // Simple keyword matching for demo purposes
        question = question.toLowerCase();
        
        if (question.includes('phish')) {
            return responses[0];
        } else if (question.includes('vpn')) {
            return responses[1];
        } else if (question.includes('cia') || question.includes('triad')) {
            return responses[2];
        } else if (question.includes('kali')) {
            return responses[3];
        } else if (question.includes('2fa') || question.includes('two-factor')) {
            return responses[4];
        } else if (question.includes('zero-day')) {
            return responses[5];
        } else if (question.includes('ethical hack')) {
            return responses[6];
        } else if (question.includes('owasp')) {
            return responses[7];
        } else if (question.includes('nmap')) {
            return responses[8];
        } else if (question.includes('metasploit')) {
            return responses[9];
        } else {
            // Random response if no keyword matches
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    
    function sendMessage() {
        const message = aiInput.value.trim();
        if (message) {
            addMessage(message, true);
            aiInput.value = '';
            
            // Show typing indicator
            const typingIndicator = document.createElement('div');
            typingIndicator.className = 'ai-message typing';
            typingIndicator.innerHTML = '<p>Typing...</p>';
            aiChat.appendChild(typingIndicator);
            aiChat.scrollTop = aiChat.scrollHeight;
            
            // Simulate AI thinking
            setTimeout(() => {
                typingIndicator.remove();
                const response = getAIResponse(message);
                addMessage(response);
            }, 1500);
        }
    }
    
    aiSend.addEventListener('click', sendMessage);
    aiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Initialize IP Tool Button
function initIPToolButton() {
    const ipToolBtn = document.querySelector('.ip-tool-btn');
    const ipTool = document.querySelector('.ip-detector-tool');
    const closeBtn = document.querySelector('.close-ip-tool');
    
    ipToolBtn.addEventListener('click', () => {
        ipTool.classList.add('active');
    });
    
    closeBtn.addEventListener('click', () => {
        ipTool.classList.remove('active');
    });
    
    // Also allow clicking footer buttons
    document.querySelectorAll('.footer-tools .ip-tool-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            ipTool.classList.add('active');
        });
    });
}

// Initialize Scroll Animations
function initScrollAnimations() {
    animateOnScroll('.section-entrance');
}

function animateOnScroll(selector) {
    const elements = document.querySelectorAll(selector);
    
    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0);
            
            if (isVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    // Initial check
    checkVisibility();
    
    // Check on scroll
    window.addEventListener('scroll', checkVisibility);
}

// Initialize Tooltips
function initTooltips() {
    const elements = document.querySelectorAll('[data-tooltip]');
    
    elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip-text';
            tooltip.textContent = element.getAttribute('data-tooltip');
            
            const rect = element.getBoundingClientRect();
            tooltip.style.position = 'fixed';
            tooltip.style.left = `${rect.left + rect.width / 2}px`;
            tooltip.style.top = `${rect.top - 40}px`;
            tooltip.style.transform = 'translateX(-50%)';
            
            document.body.appendChild(tooltip);
            
            element.addEventListener('mouseleave', () => {
                tooltip.remove();
            }, { once: true });
        });
    });
}