import {dataSources} from "./dataSources";

export type Context = {
    dataSources: ReturnType<typeof dataSources>
}