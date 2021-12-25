import { Typography, Modal, Box } from "@mui/material";
import React from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4
}


const MyModal = ({title, children, visible, setVisible}) => {
    const handleClose = () => setVisible(false);

    return (
        <div>
            <Modal
                open={visible}
                onClose={handleClose}
                aria-labelledby="modal-title"
            >
                <Box sx={style}>
                <Typography 
                    id="modal-title" 
                    variant="h6" 
                    component="h2"
                    sx={{textAlign: 'center', marginBottom: "1em"}}
                >
                    {title}
                </Typography>
                    {children}
                </Box>
            </Modal>
        </div>
    );
};

export default MyModal;