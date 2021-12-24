import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => 
    createStyles({
        container: (props) => ({
            maxWidth: props.breakpoints.values.md,
            marginTop: '100px'
        }),
        hiTitle: (props) => ({
            textAlign: 'center',
            color: props.palette.text.primary
        }),
        hiDescription: (props) => ({
            textAlign: 'center',
            color: props.palette.text.secondary
        })
    })
);