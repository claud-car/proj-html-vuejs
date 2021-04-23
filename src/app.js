var app = new Vue({
    el: '#root',
    data: {
        index:0,
        textInsertJumbo:[
            {
                jumbo:'HOME'
            },
            {
                jumbo:'ABOUT'
            },
            {
                jumbo:'SERVICES'
            },
            {
                jumbo:'PROCESS'
            },
            {
                jumbo:'TEAM'
            },
            {
                jumbo:'BLOG'
            },
        ],
        buttonText:[
            {
                button: "GET IN TOUCH"
            }
        ],
        teamExpert:[
            {
                img: "./img/team-1.jpg",
                name: "David Cooper",
                category: "CTO & CO-FOUNDER",
                speechTitle: "CTO Speech",
                speechText1:"CTO Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet",
                speechText2: "CTO Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente maxime commodi assumenda.Lorem ipsum dolor sit amet",
                speechText3: "CTO Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet"

            },
            {
                img: "./img/team-2.jpg",
                name: "Emma Lopez",
                category: "CHIEF MARKETING",
                speechTitle: "Chief Marketing Speech",
                speechText1:"CHIEF Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet",
                speechText2: "CHIEF Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente maxime commodi assumenda.Lorem ipsum dolor sit amet",
                speechText3: "CHIEF Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet"
            },
            {
                img: "./img/team-3.jpg",
                name: "Oliver Jones",
                category: "CHIEF PROCUREMENT",
                speechTitle: "Chief Speech",
                speechText1:"CHIEF2 Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet",
                speechText2: "CHIEF2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente maxime commodi assumenda.Lorem ipsum dolor sit amet",
                speechText3: "CHIEF2 Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet"

            },
            {
                img: "./img/team-4.jpg",
                name: "T.Johnson",
                category: "CEO & PRESIDENT",
                speechTitle: "President Speech",
                speechText1:"CEO Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet",
                speechText2: "CEO Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente maxime commodi assumenda.Lorem ipsum dolor sit amet",
                speechText3: "CEO Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet"
            }
        ],
        infoAbout:[
            {
                title: "Tradition",
                text: ` Lorem ipsum dolor sit amet consectetur adipiscing elit.`,
                class: "fa-medal"
            },
            {
                title: "Security",
                text: ` Lorem ipsum dolor sit amet consectetur adipiscing elit.`,
                class: "fa-lock"
            },
            {
                title: "Certificate",
                text: ` Lorem ipsum dolor sit amet consectetur adipiscing elit.`,
                class: "fa-edit"
            },
            {
                title: "Expertise",
                text: `Lorem ipsum dolor sit amet consectetur adipiscing elit.`,
                class: "fa-graduation-cap"
            }
        ]
    },
    methods:{
        setIuser: function (position) {
			this.index = position;
			return this.index;
		},
    }
}) //fine root

console.log("bababaab");