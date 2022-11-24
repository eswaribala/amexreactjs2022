export const adminMenuItems = [
    {label: 'Change Role', icon: 'pi pi-fw pi-home'},
    {label: 'Monitor Moderator', icon: 'pi pi-fw pi-calendar'},
    {label: 'Toggle Maintenance', icon: 'pi pi-fw pi-pencil'},
    {label: 'Extract Channel Info', icon: 'pi pi-fw pi-file'},
    {label: 'Exit', icon: 'pi pi-fw pi-file', command: () => {
            window.localStorage.setItem("loggedIn","true")
        window.location.href = "/"
    }}
];
