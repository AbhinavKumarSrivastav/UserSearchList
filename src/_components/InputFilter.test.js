import { render } from "@testing-library/react";
import InputFilter from './index'
describe("input component",()=>{
    it("should create an entry in component state", () => {
        // given
        const component = render(<InputFilter />);
        const form = component.find('Input');
        // when
        form.props().onChange({target: "hi"});
        // then
        expect(component.state('input')).toBeDefined();
    });

})