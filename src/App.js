import { Global, css } from '@emotion/react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import React, { Suspense } from 'react'
import { history } from './utils'
import configureStore from './store/configureStore'
import route from './routes'

const store = configureStore(window.__INITIAL_STATE__)

const globalStyles = css`
    @font-face {
        font-family: 'Roboto';
        src: url('fonts/Roboto-Black.woff2') format('woff2'),
            url('fonts/Roboto-Black.woff') format('woff');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('fonts/Roboto-Bold.woff2') format('woff2'),
            url('fonts/Roboto-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('fonts/Roboto-BlackItalic.woff2') format('woff2'),
            url('fonts/Roboto-BlackItalic.woff') format('woff');
        font-weight: 900;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('fonts/Roboto-BoldItalic.woff2') format('woff2'),
            url('fonts/Roboto-BoldItalic.woff') format('woff');
        font-weight: bold;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('fonts/Roboto-Italic.woff2') format('woff2'),
            url('fonts/Roboto-Italic.woff') format('woff');
        font-weight: normal;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('fonts/Roboto-Light.woff2') format('woff2'),
            url('fonts/Roboto-Light.woff') format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('fonts/Roboto-MediumItalic.woff2') format('woff2'),
            url('fonts/Roboto-MediumItalic.woff') format('woff');
        font-weight: 500;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('fonts/Roboto-LightItalic.woff2') format('woff2'),
            url('fonts/Roboto-LightItalic.woff') format('woff');
        font-weight: 300;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('fonts/Roboto-Medium.woff2') format('woff2'),
            url('fonts/Roboto-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('fonts/Roboto-Regular.woff2') format('woff2'),
            url('fonts/Roboto-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('fonts/Roboto-ThinItalic.woff2') format('woff2'),
            url('fonts/Roboto-ThinItalic.woff') format('woff');
        font-weight: 100;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('fonts/Roboto-Thin.woff2') format('woff2'),
            url('fonts/Roboto-Thin.woff') format('woff');
        font-weight: 100;
        font-style: normal;
        font-display: swap;
    }



    html,
    body {
        background: #fbfbfb;
        overflow: hidden;
        font-family: 'Roboto';
        -webkit-font-smoothing: auto;
        font-size: 14px;
        width: 100%;
        height: 100vh;
        scroll-behavior: smooth;
        padding: 0px;
        margin: 0px;
    }
`

function Root() {
    return (
        <Provider store={store}>
            <Suspense fallback={null}>
                <Global styles={globalStyles} />
                <Router history={history}>{route}</Router>
            </Suspense>
        </Provider>
    )
}

export default Root
