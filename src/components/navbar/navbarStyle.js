import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => 
    createStyles({
        navbar: (props) => ({
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            position: 'fixed'
        }),
        link: {
            color: '#fff',
            textDecoration: 'none',
        },
        linkMenu: {
            color: '#111',
            textDecoration: 'none'
        },
        logoP: (props) => ({
            paddingRight: '16px'
        }),
        menuBox: {
            flexGrow: 1
        },
        boxButton: {
            display: 'flex'
        }
    })
)