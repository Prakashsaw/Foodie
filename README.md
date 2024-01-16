
## Structure which I follow to build this project
/**
 * ---Header:
 *      -Logo
 *      -Nav Items
 *  ---Body:
 *      -Search
 *      -Restuarant Container
 *          -Restuarant Cards
 *  ---Foter
 *      -Copyright
 *      -Links
 *      -Address
 *      -Contact
 *
 *
 */
### Import/Export
 Two types of Export/Import are used in react:

    -Default Export/Import
        export default Components
        import components from "path"

    -Named Expport/Import
        export const Components
        import {Components} from "path"


### React Hooks
    ->Normal Javascript utility functions.
        Mostly used Hooks are
        -useState() :- Super powerful state Varaible in react.
        -useEffect():- By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
