export const items = [
    {
        label:'Create Channel',
        icon:'pi pi-fw pi-file',

    },
    {
        label:'Add Videos',
        icon:'pi pi-fw pi-pencil',
        items:[
            {
                label:'Get Karma Points',
                icon:'pi pi-fw pi-align-left'
            }

        ]
    },
    {
        label:'Search Videos',
        icon:'pi pi-fw pi-user'
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
        command: () => { window.location.href = "/" }
    }
];
