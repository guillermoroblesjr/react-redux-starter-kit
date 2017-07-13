/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import Example from 'components/Example/Example'

describe('(Component) Example', () => {
  describe(`Example with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <Example />
      )
    })

    it(`Contains the 'Example' class.`, () => {
      const el = wrapper.find('div.Example')
      expect(el).to.exist
    })
  })

  describe(`Example with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let exampleProps = {}

    beforeEach(() => {
      middlewares = [ thunk ]
      mockStore = configureMockStore(middlewares)
      store = mockStore({
        lob: {
          pick: '123'
        },
        userWants: {
          need: 'XXX'
        },
        lobDependantList: 'lobDependantList',
        geosuggestLocation: 'geosuggestLocation',
        wmUsNav: 'wmUsNav',
        masData: 'masData',
        mapLocationDetails: {
          userAddress: '123'
        },
        smartySuggestion: {
          suggestions: [{
            city: 'city',
            state: 'state',
            street: 'street'
          }]
        },
      })
      exampleProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <Example {...exampleProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
