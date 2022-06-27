/*
* @vitest-environment happy-dom
*/


import Button from '../src/components/BlueAndWhiteButton.vue'
import {describe, it, expect} from 'vitest';
import {mount} from '@vue/test-utils'

describe('button component', () => {
    it ('is rendered', () => {
        const wrapper = mount(Button,{
            slots: {
                default: '<div id="mydiv"></div>'
            }
        })
        expect(wrapper.find('#mydiv').exists()).toBeTruthy()
    })
    it('is able to be pressed', () => {
        const wrapper = mount(Button);
        wrapper.find('button').trigger('click')
        expect(wrapper.emitted().cb).toBeTruthy()
    })
})