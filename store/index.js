import {createStore} from "vuex";
import {listStore} from "./listStore";

export default createStore({
    modules: {
        list: listStore
    }
})