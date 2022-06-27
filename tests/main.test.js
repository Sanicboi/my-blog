/*
 * @vitest-environment happy-dom
 */




import { describe, expect, it,  } from 'vitest'
import {mount} from '@vue/test-utils'
import App from '../src/App.vue'

// The two tests marked with concurrent will be run in parallel
describe('vue app', () => {
  it('can be mounted', () => {
     const wrapper = mount(App)
     expect(wrapper.exists()).toBeDefined()
     })
})