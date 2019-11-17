export default {
    urlServer: 'http://localhost:8000',
    permissionRole: {
        USER: 'Usuario',
        OWNER: 'Propietario',
        ADMIN: 'Administrador',
        NOT_AUTHENTICATED: 'No Autenticado'
    },
    permission: {
        ANY_USER: ['No Autenticado', 'Propietario', 'Usuario'],
        ONLY_OWNER: ['Administrador', 'Propietario'],
        ONLY_USER: ['Administrador', 'Usuario'],
        ONLY_ADMIN: ['Administrador']
    }
}