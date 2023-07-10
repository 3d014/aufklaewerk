interface Classes{
    smallerScreen?:{
        orangeBoxContainer:{},
        huggingPeopleWrapper:{},
        orangeBox:{},
        orangeBoxTitle:{},
        memberContainerTitle:{},
        memberImage:{},
        memberInfo:{},
        memberSubject:{}
    },
    largerScreen?:{
        orangeBoxContainer:{}
        huggingPeopleWrapper:{},
        orangeBox:{},
        orangeBoxTitle:{},
        memberContainerTitle:{},
        memberImage:{},
        memberInfo:{},
        memberSubject:{}
    },
    aufklaeverkTeamImage:{},
    aufklaeverkTeamTextSection:{},
    aufklaeverkTeamTitle:{},
    subTextSection:{},
    huggingPeopleImage:{},
    orangeBoxTopLeftText:{},
    orangeBoxParagraph:{},
    orangeBoxList:{},
    orangeBoxButton:{},
    memberContainerTopPart:{},
    memberContainerText:{},
    filterButton:{},
    activeFilterButton:{},
    memberContainer:{},
    innerMemberContainer:{},
    memberName:{},
    memberAge:{},
    memberContainerBottomPart:{}
    worldMapContainer:{},
    worldMapImage:{},
    additionalInfo:{}
    
    
}
export const classes:Classes={

        smallerScreen:{
            orangeBoxContainer:{ display: "flex", minHeight: "400px", flexDirection: "column", margin: "10px 20px 10px 20px" },
            huggingPeopleWrapper:{ width: "100%" },
            orangeBox:{ width: "100%", backgroundColor: "#f0956a", padding: "30px 30px 30px 40px", boxSizing: "border-box" },
            orangeBoxTitle:{ color: "white", textAlign: "left", margin: 0, fontSize: "26px" },
            memberContainerTitle:{ color: "#f0956a", fontWeight: "normal", fontSize: "24px" },
            memberImage:{ height: "300px", objectFit: "cover", width: "280px",borderRadius:'10px' },
            memberInfo:{ marginTop:'-5px',
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "stretch",
                            alignContent: "stretch",
                            paddingTop: "20px",
                            height: "130px",
                            width: "280px",
                            backgroundColor: "white",
                            color: "#f0956a",
                            borderRadius:'10px'
                          },
            memberSubject:{ fontSize: "0.6em", wordBreak: "break-all" },

        },



        largerScreen:{
            orangeBoxContainer:{ display: "flex", alignContent: "space-between", minHeight: "400px", margin: "10px 50px 10px 50px" },
            huggingPeopleWrapper:{ width: "40%", padding: "30px 0 30px 0" },
            orangeBox:{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                alignContent: "stretch",
                justifyContent: "stretch",
                backgroundColor: "#f0956a",
                padding: "30px 30px 30px 40px",
              },
              orangeBoxTitle:{ color: "white", fontWeight: "normal", margin: 0, textAlign: "left" },
              memberContainerTitle:{ color: "#f0956a", fontWeight: "normal" },
              memberImage:{ height: "450px", objectFit: "cover", width: "350px",borderRadius:'10px' },
              memberInfo:{
                display: "flex",
                flexDirection: "column",
                justifyContent: "stretch",
                alignContent: "stretch",
                paddingTop: "20px",
                color: "#f0956a",
                height: "150px",
                width: "350px",
                backgroundColor: "white",
                marginTop:'-5px',
                borderRadius:'10px'
              },
              memberSubject:{ fontSize: "1.1em" }
              

        },


        aufklaeverkTeamImage:{
            width: "100%",
            height: "80vh",
            objectFit: "cover",
            filter: "blur(5px) brightness(0.7)",
            zIndex: "-1",
          },
        
        aufklaeverkTeamTextSection:{
            marginBottom: "20px",
            width: "100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: "1000",
            color: "white",
            fontSize: "18px",
            fontFamily: "DM Serif Text, serif",
            overflow: "hidden",
          },
          aufklaeverkTeamTitle:{ fontSize: "32px", color: "white", fontFamily: "DM Serif Text, serif" },
          subTextSection:{
            margin: "50px 10px 10px",
            fontFamily: "Lato, sans-serif",
            color: "#176817",
            padding: "0% 15% 5% 15% ",
          },
          huggingPeopleImage:{ width: "100%", objectFit: "cover", height: "100%", borderRadius: "10px" },
          orangeBoxTopLeftText:{ color: "#ff5100", textAlign: "left", margin: "0" },
          orangeBoxParagraph:{ color: "white", textAlign: "left" },
          orangeBoxList:{ textAlign: "left", color: "white", fontWeight: "bolder", marginTop: "20px", paddingLeft: "5%" },
          orangeBoxButton:{ minWidth: "72%",
            padding: "1em 1em 1em 1em",
            backgroundColor: "#ff5100",
            fontSize: "1em",
          },
          memberContainerTopPart:{
            backgroundColor: "#004c45",
            minHeight: "10px",
            borderRadius: "80% 80% 0% 0%/25% 25% 0% 0%",
            padding: "20px"
         },
         memberContainerText:{ color: "white", fontSize: "1.5em" },
         filterButton:{
            margin: "5px 0.4em 0 0.4em",
            padding: "0.3em 2.5em 0.3em 2.5em",
            fontSize: "1.3em",
            fontWeight: "normal",
            color: "green",
            backgroundColor: "white",
            borderRadius: "10px",
          },
         activeFilterButton:{
            margin: "5px 0.4em 0 0.4em",
            padding: "0.3em 2.5em 0.3em 2.5em",
            fontSize: "1.3em",
            fontWeight: "normal",
            color: "white",
            backgroundColor: "#e6762c",
            borderRadius: "10px",
          },
         memberContainer:{
            minHeight: "500px",
            backgroundColor: "#004c45",
            marginTop:'-5px',
            padding: "50px 20px 50px",
          },
          innerMemberContainer:{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "space-around",
            justifyContent: "space-around",
            marginTop: "50px",
          },
          memberName:{ margin: "0", padding: "0" },
          memberAge:{ fontSize: "1.5em", margin: "0" },
          memberContainerBottomPart:{marginTop:'-5px',backgroundColor: "#004c45",minHeight: "50px",borderRadius: "0% 0% 100% 100%/0% 0% 100% 100%"},
          worldMapContainer:{width:'100%',marginTop:'20px'},
          worldMapImage:{objectFit:'cover',width:'100%'},
          additionalInfo:{display:'flex',flexDirection:'column',justifyContent:'center'}

}