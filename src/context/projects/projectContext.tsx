import { createContext } from 'react';
import { initialState } from "../../types/projectTypes/projectTypes";

const projectContext = createContext(initialState);

export default projectContext;