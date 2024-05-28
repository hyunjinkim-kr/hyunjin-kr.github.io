$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        // {
        //     image: 'assets/images/next_portfolio.jpg',
        //     link: 'https://github.com/hyunjinkim-kr/portfolio',
        //     title: 'Portfolio by Next.js',
        //     demo: 'https://portfolio-five-khaki-81.vercel.app/',
        //     technologies: ['React.js', 'Next.js'],
        //     description: "This portfolio page was developed using Next.js and deployed on Vercel.",
        //     categories: ['webdev', 'diy']
        // },
        // {
        //     image: 'assets/images/korean_history.jpg',
        //     link: 'https://github.com/hyunjinkim-kr/hanguksa',
        //     title: 'hanguksa (Korean history quiz)',
        //     demo: false,
        //     technologies: ['HTML', 'CSS', 'Javascript'],
        //     description: "An engaging and educational online platform to test and learn about Korean history.",
        //     categories: ['webdev','diy']
        // },
        {
            image: 'assets/images/Escape_the_Block.png',
            link: 'https://github.com/hyunjinkim-kr/unblockMe',
            title: 'Un Block Me',
            demo: false,
            technologies: ['C++', 'C'],
            description: "Unblock Me is a popular sliding block puzzle game where the objective is to move a red block out of the board by sliding other blocks out of the way.",
            categories: ['diy']
        },
        {
            image: 'assets/images/samsung_logo.png',
            link: 'https://portfolio-five-khaki-81.vercel.app/detail/66544be18458b2d4ee4aff9b',
            title: 'SAMSUNG, DS EHS ITO',
            demo: false,
            technologies: ['Java', 'Javascript','Vue.js'],
            description: "Participation in the development and operation of Samsung Semiconductor's environmental safety management system.",
            categories: ['featured','webdev']
        },
        {
            image: 'assets/images/samsung_logo.png',
            link: 'https://portfolio-five-khaki-81.vercel.app/detail/66544be18458b2d4ee4aff9b',
            title: 'SAMSUNG, G-MES 4.0 (Phase Three)',
            demo: false,
            technologies: ['Java', 'Javascript','Nexacro'],
            description: "Participation in the analysis, development, and corporate expansion stabilization process of Samsung Electronics' product (mobile, home appliances, etc.) production and resource management program.",
            categories: ['featured','webdev']
        },
        {
            image: 'assets/images/samsung_logo.png',
            link: 'https://portfolio-five-khaki-81.vercel.app/detail/66544bbe8458b2d4ee4aff9a',
            title: 'SAMSUNG, G-MES 2.0',
            demo: false,
            technologies: ['Java', 'Javascript'],
            description: "peration, analysis, and modification of Samsung Electronics' product (mobile, home appliances, etc.) production and resource management program, including batch program adjustment.",
            categories: ['featured','webdev']
        },
        {
            image: 'assets/images/samsung_logo.png',
            link: 'https://portfolio-five-khaki-81.vercel.app/detail/66544b938458b2d4ee4aff99',
            title: 'SAMSUNG, G-MES 2.0 IMEI',
            demo: false,
            technologies: ['Java', 'Javascript'],
            description: "Analysis, development, and conversion work of Samsung Electronics' mobile product (mobile IMEI) history management program.",
            categories: ['featured','webdev']
        },
        {
            image: 'assets/images/samsung_logo.png',
            link: 'https://portfolio-five-khaki-81.vercel.app/detail/66544b738458b2d4ee4aff98',
            title: 'SAMSUNG, G-MES 4.0 (Phase One)',
            demo: false,
            technologies: ['Java', 'Javascript','Nexacro'],
            description: "Analysis, development, and stabilization of Samsung Electronics' product production and resource management program for mobile devices and consumer electronics.",
            categories: ['featured','webdev']
        },



        

        
        // {
        //     image: 'assets/images/mentors.jpg',
        //     link: 'https://github.com/abhn/Mporter',
        //     title: 'Mporter',
        //     demo: 'https://mporter.co',
        //     technologies: ['Flask', 'Celery', 'Python'],
        //     description: "Flask web application for easy reporting updates to one's mentor. Multi-user support, easy to deploy and use.",
        //     categories: ['featured', 'webdev']
        // },
        // {
        //     image: 'assets/images/mobile-landscape.jpg',
        //     link: 'https://github.com/abhn/Wall-E',
        //     title: 'Wall-E',
        //     demo: 'http://wall-e-jekyll.github.io/',
        //     technologies: ['Semantic UI', 'Jekyll'],
        //     description: "A modern Jekyll theme with grid frontpage, beautiful typography, mobile responsive, made with Semantic UI.",
        //     categories: ['featured', 'webdev']
        // },
        // {
        //     image: 'assets/images/collage.jpg',
        //     link: 'https://github.com/abhn/Marvel',
        //     title: 'Marvel',
        //     demo: false,
        //     technologies: ['Android', 'OpenCV'],
        //     description: "Attendance marking tool that uses face recognition for marking attendance and firebase for tracking and analytics.",
        //     categories: ['featured', 'native']
        // },
        // {
        //     image: 'assets/images/mpw.jpg',
        //     link: 'https://github.com/abhn/mpw',
        //     title: 'Master Password',
        //     demo: 'https://www.nagekar.com/mpw',
        //     technologies: ['Semantic UI', 'CSS3'],
        //     description: "Master Password is an ingenious password solution that makes your passwords truly impossible to lose.",
        //     categories: ['featured', 'security']
        // },
        // {
        //     image: 'assets/images/social-share-count.jpeg',
        //     link: 'https://github.com/abhn/Social-Share-Counts',
        //     title: 'Social Share Count',
        //     demo: false,
        //     technologies: ['Python'],
        //     description: "Ever wondered how many times a URL has been shared on popular social networks?",
        //     categories: ['native']
        // },
        // {
        //     image: 'assets/images/data-destroyer.png',
        //     link: 'https://github.com/abhn/data-destroyer-gui',
        //     title: 'Data Destroyer',
        //     demo: false,
        //     technologies: ['C++', 'Qt'],
        //     description: "Native GUI wrapper for GNU coreutils tool 'dd'",
        //     categories: ['native']
        // },
        // {
        //     image: 'assets/images/raspberry-pi-monitor.png',
        //     link: 'https://github.com/abhn/RPi-Status-Monitor',
        //     title: 'Raspberry Pi Monitor',
        //     demo: false,
        //     technologies: ['python', 'flask'],
        //     description: "Web based status monitor/smart mirror, displays system stats, weather and more.",
        //     categories: ['webdev', 'diy']
        // },



        // {
        //     image: 'assets/images/s3scan.png',
        //     link: 'https://github.com/abhn/S3Scan',
        //     title: 'S3Scan',
        //     demo: false,
        //     technologies: ['python'],
        //     description: "Automate crawling of a website and find publicly open S3 buckets for takeover.",
        //     categories: ['native', 'security']
        // },

        // {
        //     image: 'assets/images/soot-spirits.png',
        //     link: 'https://github.com/abhn/Soot-Spirits',
        //     title: 'Soot Spirits',
        //     demo: 'https://sootspirits.github.io',
        //     technologies: ['Jekyll', 'CSS3'],
        //     description: "A simple responsive two column Jekyll theme. Great for personal blog and basic portfolio website.",
        //     categories: ['webdev']
        // },
        // {
        //     image: 'assets/images/python-chat.png',
        //     link: 'https://www.nagekar.com/2014/12/lan-group-messenger-in-python.html',
        //     title: 'Terminal Group Chat',
        //     demo: false,
        //     technologies: ['Python', 'Sockets'],
        //     description: "Simple terminal group chat based on native sockets using Python.",
        //     categories: ['native']
        // },
        // {
        //     image: 'assets/images/old-lcd.jpg',
        //     link: 'https://www.nagekar.com/2018/05/reusing-old-laptop-lcd-panel.html',
        //     title: 'Reusing Old LCD Panel',
        //     demo: false,
        //     technologies: ['DIY'],
        //     description: "Reusing a dead laptop's LCD panel as a secondary monitor.",
        //     categories: ['diy']
        // },
        // {
        //     image: 'assets/images/nextcloud-enc.png',
        //     link: 'https://www.nagekar.com/2017/08/private-cloud-part-2.html',
        //     title: 'Encrypted Self-Hosted Cloud',
        //     demo: false,
        //     technologies: ['NextCloud', 'GnuPG'],
        //     description: "Self hosted encrypted cloud setup with Nextcloud and GnuPG.",
        //     categories: ['diy', 'security']
        // },
        // {
        //     image: 'assets/images/google-cloud-backup.png',
        //     link: 'https://www.nagekar.com/2018/05/encrypted-backup-with-duplicity.html',
        //     title: 'Encrypted Backups - Google Cloud',
        //     demo: false,
        //     technologies: ['NextCloud', 'Duplicity'],
        //     description: "Create automated encrypted incremental backups of data. Sync everything securely to Google Cloud.",
        //     categories: ['diy', 'security']
        // },
        // {
        //     image: 'assets/images/pi-cloud.jpg',
        //     link: 'https://www.nagekar.com/2016/01/how-to-private-local-cloud-using-raspberrypi.html',
        //     title: 'Local Cloud - Raspberry Pi',
        //     demo: false,
        //     technologies: ['FTP', 'DIY'],
        //     description: "Host a local cloud server with a Raspberry Pi and a spare hard disk. Access data instantaneously on any device on the network.",
        //     categories: ['diy']
        // },
        // {
        //     image: 'assets/images/koalamate.png',
        //     link: 'https://github.com/abhn/koalamate',
        //     title: 'Koalamate',
        //     demo: false,
        //     technologies: ['Electron', 'Javascript'],
        //     description: "A cross-platform desktop application that serves as a Wolfram Alpha query place and notes taker.",
        //     categories: ['native']
        // },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}