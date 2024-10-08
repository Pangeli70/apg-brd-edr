/** ---------------------------------------------------------------------------
 * @module [ApgEdr]
 * @author [APG] Angeli Paolo Giusto
 * @version 0.1 APG 20240701
 * @version 0.2 APG 20240726 English comments
 * ----------------------------------------------------------------------------
 */

/**
 * Predefined Shared Routes exported by an Edr based microservice
 */
export enum ApgEdr_Route_eShared {


    FILE_ANY_ASSET = "/assets/*",

    FILE_ANY_TEMPLATE = "/templates/*",

    PAGE_HOME = "/",

    PAGE_ERROR = "/Edr/Error",

    PAGE_LANGUAGE = "/Edr/Language",

    PAGE_LOGIN = "/Edr/Auth/Login",

    PAGE_LOGOUT = "/Edr/Auth/Logout",
    
    PAGE_REQ_OTP = "/Edr/Auth/Otp",

    PAGE_TOOLS = "/Edr/Tools",


    RESERVED_PAGE_ERRORS = "/Edr/Rsvd/Errors",

    RESERVED_PAGE_LOG = "/Edr/Rsvd/Log",

    RESERVED_PAGE_LOG_ENTRY = "/Edr/Rsvd/Log/Entry",

    RESERVED_PAGE_TNG_TEMPLATES = "/Edr/Rsvd/Tng/Templates",

    RESERVED_PAGE_TNG_CACHES = "/Edr/Rsvd/Tng/Caches",

    RESERVED_PAGE_TNG_FILE = "/Edr/Rsvd/Tng/File",

    RESERVED_PAGE_TNG_FUNCTION = "/Edr/Rsvd/Tng/Function",

    RESERVED_PAGE_TNG_CHUNK = "/Edr/Rsvd/Tng/Chunk",

    RESERVED_PAGE_ENVIRONMENT = "/Edr/Rsvd/Environment",

    RESERVED_PAGE_USERS = "/Edr/Rsvd/Users",
    
    RESERVED_PAGE_USER = "/Edr/Rsvd/User",

    RESERVED_PAGE_USER_UNLOCK = "/Edr/Rsvd/User/Unlock",


}