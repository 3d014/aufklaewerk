
export const styles={
  tabStyle:{
    fontSize:'20px',
    fontFamily:'Georgia,serif', 
    color:'#F0956A',
    fontWeight:'bold',
    '&. Mui-selected':{
      textDecoration:'none',
      color:'#ff5100',
      'borderRadius':'30px',
      background:'#304a39'
    }
  },
  appBarStyle:{
    fontFamily:'Georgia,serif',
    fontSize:'24px',
    fontWeight:'500',
    color:'#f79163',
    background:'#045344',
    marginBottom:'100px',
    button: {
        borderRadius:'30px',
          '&:hover': {
            background: '#44634e',
            transition: 'all .4s ease',
          },
          "&. Mui-selected":{background:'#304a39'},
          "&:focus":{background:'#304a39', transition:'all 1s ease', color:'#ff5100'}
        },
  },
  tabsStyle:{ 
    marginLeft: "auto",
    fontFamily:'Georgia,serif'
  },
  typographyStyle:{
    fontWeight:'bolder',
    fontFamily:'Lato,sans-serif',
    fontSize:'36px',
    color:'#ff5100'
  },

  
  




}