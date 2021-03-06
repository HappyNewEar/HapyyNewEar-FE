import styled from "@emotion/styled";

const AppLayout = styled.div((props) => ({
    maxWidth:'1280px',
    fontcolor: 'black',
    scrollbarWidth: 'none', /* Firefox */
    // height: '100%',
    // width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',

    ".routes": {
        paddingTop: '8em',
        minHeight: '80vh',
    },

    'a':{
        textDecoration: 'None',
        color:'black'
    }
}))

export default AppLayout;
