export const items = [
    {
        label:'Channel',
        icon:'pi pi-fw pi-file',

        items:[
            {
                label:'Create Channel',
                icon:'pi pi-fw pi-align-left',
                command: () => { window.location.href = "/channelcreate" },
            },
            {
                label:'View Channels',
                icon:'pi pi-fw pi-align-left',
                command: () => { window.location.href = "/channelview" },
            }

        ]
    },

    {
        label:'Videos',
        icon:'pi pi-fw pi-pencil',
        items:[
            {
                label:'Upload Video',
                icon:'pi pi-fw pi-align-left',
                command: () => { window.location.href = "/videoupload" }
            },
            {
                label:'Get Karma Points',
                icon:'pi pi-fw pi-align-left'
            }

        ]
    },
    {
        label:'Search Videos',
        icon:'pi pi-fw pi-user',
        command: () => { window.location.href = "/videodownload" }
    },
    {
        label:'View History',
        icon:'pi pi-fw pi-calendar'
    },

    {
        label:'Update User Info',
        icon:'pi pi-fw pi-calendar'
    },
    {
        separator:true
    },
    {
        label:'Quit',
        icon:'pi pi-fw pi-power-off',
        command: () => {
            window.localStorage.setItem("loggedIn","false")
            window.localStorage.setItem("userLoggedIn","false")
            window.location.href = "/"
        }
    }
];
