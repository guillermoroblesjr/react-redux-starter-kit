/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }]*/
import React from 'react'
import { bindActionCreators } from 'redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import CoreLayout from 'components/CoreLayout/CoreLayout'

describe('(Component) CoreLayout', () => {
  describe(`CoreLayout with no properties`, () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <CoreLayout />
      )
    })

    it(`Contains the 'CoreLayout' class.`, () => {
      const el = wrapper.find('div.CoreLayout')
      expect(el).to.exist
    })
  })

  describe(`CoreLayout with properties`, () => {
    let wrapper
    let middlewares, mockStore, store
    let spies = {}
    let coreLayoutProps = {}

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
      coreLayoutProps = {
        reduxState: store.getState(),
        reduxActions: {
          ...bindActionCreators({
            // Action creators go here.
            // actionName: (spies.actionName = sinon.spy()),
          }, spies.dispatch = sinon.spy()),
        }
      }

      wrapper = shallow(
        <CoreLayout {...coreLayoutProps}/>
      )
    })

    it(`????`, () => {

    })
  })
})
