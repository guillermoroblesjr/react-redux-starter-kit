/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import Home from 'components/Home/Home'

describe('(Component) Home', () => {
  describe(`Home with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <Home />
      )
    })

    it(`Contains the 'Home' class.`, () => {
      const el = wrapper.find('div.Home')
      expect(el).to.exist
    })
  })

  describe(`Home with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let homeProps = {}

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
      homeProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <Home {...homeProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
