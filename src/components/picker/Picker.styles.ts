export const mainStyles:Record<string,React.CSSProperties>={
    mainDivStyle:{
        width:'266px',display:'flex',
        height:'80%',
        
   justifyContent:'space-evenly',alignItems:'flex-start',
   flexDirection:'column',padding:'1.5rem 1rem 1.5rem 1rem',rowGap:'10px',
   border:'2px black solid',margin:'1rem',
   borderRadius:'10px',
   backgroundColor:'white',
   zIndex:'9999',
    }
}

export const muiComponentStyles={
    autoComplete:{
        width:'100%',
        fontSize:'1rem'
    },
    slider:{
        '&.MuiSlider-root':{color:'grey'}
    },
    button:{
        width:'100%',background:'#FF5100'
    }

}