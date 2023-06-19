

export const Styles={
    mainBox:{
        width:'266px',display:'flex',
        height:'80%',
        overflow:'hidden',
   justifyContent:'space-evenly',alignItems:'flex-start',
   flexDirection:'column',padding:'1.5rem 1rem 1.5rem 1rem',rowGap:'10px',
   border:'2px black solid',margin:'1rem',
   borderRadius:'10px',
   backgroundColor:'white',
//    boxSizing:'border-box',
//    zIndex:'9999',
   '@media screen and (max-width: 600px)': {
    width: '70%',
    height:'80%' // Set a smaller width for screens below 600px
  },
  '@media screen and (max-width: 300px)': {
    width: '75%',
    height:'90%' // Set a smaller width for screens below 600px
  },
  
    },
    
    autoComplete:{
        width:'100%',
        fontSize:'1rem',
        '@media screen and (max-width: 600px)': {
            width: '100%',
            fontSize:'0.5rem'// Set a smaller width for screens below 600px
          },
    },
    slider:{
        '&.MuiSlider-root':{color:'grey'}
    },
    button:{
        width:'100%',background:'#FF5100'
    }

}