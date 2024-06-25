export const navLinks = [
    { link: 'About', linkTo: '/about' },
    { link: 'Careers', linkTo: '/careers' },
    { link: 'Events', linkTo: '/events' },
    { link: 'Products', linkTo: '/products' },
    { link: 'Support', linkTo: '/support' },
];
export const socialLinks = [
    { link: 'Facebook', icon: '/assets/icons/icon-facebook.svg', linkTo: 'https://www.facebook.com' },
    { link: 'Twitter', icon: '/assets/icons/icon-twitter.svg', linkTo: 'https://www.twitter.com' },
    { link: 'Pinterest', icon: '/assets/icons/icon-pinterest.svg', linkTo: 'https://www.pinterest.com' },
    { link: 'Instagram', icon: '/assets/icons/icon-instagram.svg', linkTo: 'https://www.instagram.com' },

];

export const creations = [
    {
        creation: 'Deep earth',
        linkTo: '/',
        image: {
            mobile: '/assets/images/mobile/image-deep-earth.jpg',
            desktop: '/assets/images/desktop/image-deep-earth.jpg'
        }
    },
    {
        creation: 'Night arcade', linkTo: '/',
        image: {
            mobile: '/assets/images/mobile/image-night-arcade.jpg',
            desktop: '/assets/images/desktop/image-night-arcade.jpg'
        }
    },
    {
        creation: 'Soccer team VR', linkTo: '/',
        image: {
            mobile: '/assets/images/mobile/image-soccer-team.jpg',
            desktop: '/assets/images/desktop/image-soccer-team.jpg'
        }
    },
    {
        creation: 'The grid', linkTo: '/',
        image: {
            mobile: '/assets/images/mobile/image-grid.jpg',
            desktop: '/assets/images/desktop/image-grid.jpg'
        }
    },
    {
        creation: 'From up above VR', linkTo: '/',
        image: {
            mobile: '/assets/images/mobile/image-from-above.jpg',
            desktop: '/assets/images/desktop/image-from-above.jpg'
        }
    },
    {
        creation: 'Pocket borealis', linkTo: '/',
        image: {
            mobile: '/assets/images/mobile/image-pocket-borealis.jpg',
            desktop: '/assets/images/desktop/image-pocket-borealis.jpg'
        }
    },
    {
        creation: 'The curiosity', linkTo: '/',
        image: {
            mobile: '/assets/images/mobile/image-curiosity.jpg',
            desktop: '/assets/images/desktop/image-curiosity.jpg'
        }
    },
    {
        creation: 'Make it fisheye', linkTo: '/',
        image: {
            mobile: '/assets/images/mobile/image-fisheye.jpg',
            desktop: '/assets/images/desktop/image-fisheye.jpg'
        }
    },
]

export const products = [
    { product: 'LoopEngage', description: "Transform your marketing and sales efforts with LoopEngage, our interactive VR platform. Create virtual showrooms, product demos, and immersive brand experiences that leave a lasting impression on potential customers." },
    { product: 'LoopTrain', description: "Revolutionize your training programs with LoopTrain, our cutting-edge VR training simulator.  Empower your employees with realistic, hands-on learning experiences that boost knowledge retention and performance.  From safety protocols to complex procedures, LoopTrain delivers engaging and effective training solutions." },
    { product: 'LoopExplore', description: "Unleash the power of storytelling with LoopExplore, our custom VR narrative experience builder. Transport your audience to new worlds, recreate historical events, or showcase your brand's vision in a way that's both captivating and memorable." },
    { product: 'LoopConnect', description: " Foster collaboration and connection with LoopConnect, our virtual meeting and events platform. Bring your team together from anywhere in the world for immersive meetings, conferences, and workshops.  Enhance productivity and engagement with virtual environments that inspire creativity and teamwork." },

]

export const events = {
    
        upcoming: [
            {
                event: 'VRX 2024', date: { month: 6, day: 15, year: 2024, length: 3 },
                location: 'Los Angeles Convention Center',
                description: 'Join us at VRX, the premier conference for virtual and augmented reality innovators.Loopstudios will be showcasing our latest VR training solutions and hosting a panel discussion on the future of immersive learning.'
            },
            {
                event: 'Immerse Global Summit', date: { month: 7, day: 28, year: 2024, length: 3 },
                location: 'Virtual Event',
                description: " We're proud to be a featured speaker at the Immerse Global Summit, where we'll unveil our groundbreaking LoopConnect platform, revolutionizing the way teams collaborate and connect in virtual spaces."
            },
            {
                event: 'SIGGRAPH 2024',
                date: { month: 8, day: 10, year: 2024, length: 3 },
                location: 'Vancouver Convention Centre',
                description: "Experience the magic of LoopExplore at SIGGRAPH, the world's leading computer graphics and interactive techniques conference. Our team will be demonstrating how VR narratives can transform storytelling and marketing."
            },

        ],
        past: [{
            event: 'AWE USA 2024',
            date: { month: 4, day: 30, year: 2024, length: 2 },
            location: 'Santa Clara Convention Center',
            description: "At AWE USA, the largest XR conference and expo, we showcased LoopEngage, our interactive VR marketing platform, and received rave reviews for its innovative features and user - friendly interface."
        },
        {
            event: 'XR Bootcamp',
            date: { month: 3, day: 5, year: 2024, length: 3 },
            location: 'Online Workshop',
            description: "We hosted a virtual XR Bootcamp where participants learned the fundamentals of VR development and created their own immersive experiences using our Loopstudios toolkit."
        },
        ]
    
    }
