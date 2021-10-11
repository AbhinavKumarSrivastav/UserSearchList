import { render } from "@testing-library/react";
import InputFilter from './index'
describe("input component",()=>{
    it("should create an entry in component state", () => {
        const component = render(<InputFilter />);
        const form = component.find('Input');
        form.props().onChange({target: "hi"});
        expect(component.state('input')).toBeDefined();
    });

})