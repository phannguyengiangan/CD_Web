import React from "react";
import { Divider, TextField } from "@mui/material";
import { CartItem } from "./CartItem";
import { AddressCard } from "./AddressCard";
import { Button, Card, Grid } from "@mui/material";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
//import * as Yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: "",
};
/*const validationSchema = Yup.object.shape({
  streetAddress: Yup.string().required("Street address is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.string().required("Pincode is required"),
  city: Yup.string().required("City is required"),
});*/
const items = [1, 1];
export const Cart = () => {
  const createOrderUsingSelectedAddress = () => {};
  const handleOpenAddressModal = () => setOpen(true);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleSubmit = (values) => {
    console.log("form value", values);
  };

  return (
    <>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10 ">
          {items.map((item) => (
            <CartItem />
          ))}
          <Divider />
          <div className="billDeatails px-5 text-sm">
            <p className="font-extralight py-5" style={{ color: "#000000" }}>
              Chi Tiết Hóa Đơn
            </p>
            <div className="space-y-3">
              <div className="flex justify-between text-black">
                <p>Tổng tiền sản phẩm</p>
                <p style={{ color: "#7ab730" }}>108000 VND</p>
              </div>
              <div className="flex justify-between text-black">
                <p>Phí giao hàng</p>
                <p style={{ color: "#7ab730" }}>30000 VND</p>
              </div>
              <Divider />
            </div>
            <div className="flex justify-between text-black">
              <p>Tổng tiền thanh toán</p>
              <p style={{ color: "#7ab730" }}>138000 VND</p>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lgf:w[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2} justifyContent="center">
                {[1, 1, 1, 1, 1].map((item) => (
                  <Grid key={item} item xs={12} md={6} lg={4}>
                    <AddressCard
                      handleSelectAddress={createOrderUsingSelectedAddress}
                      item={item}
                      showButton={true}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ mt: 0.5 }}>
              <Grid container justifyContent="center">
                <Grid item xs={12} md={6} lg={4}>
                  <Card
                    className="flex gap-5 w-64 p-5 justify-center"
                    style={{ backgroundColor: "#f0f0f0" }}
                  >
                    <AddLocationAltIcon style={{ color: "#7ab730" }} />
                    <div className="space-y-3 text-black">
                      <h1
                        className="font-semibold text-lg"
                        style={{ color: "#7ab730" }}
                      >
                        Thêm địa chỉ mới
                      </h1>
                      <Button
                        variant="outlined"
                        fullWidth
                        style={{ backgroundColor: "#000000" }}
                        onClick={handleOpenAddressModal}
                      >
                        Thêm
                      </Button>
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </section>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            //validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Grid container spacing={2}></Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="city"
                  label="Thành Phố/Tỉnh"
                  fullWidth
                  variant="outlined"
                  /* error={!ErrorMessage("streetAddress")}
                  helperText=<ErrorMessage>
                    {(msg) => <span className="text-red-600">{msg}</span>}
                  </ErrorMessage>*/
                />
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="state"
                    label="Quận/Huyện"
                    fullWidth
                    variant="outlined"
                    /* error={!ErrorMessage("streetAddress")}
                  helperText=<ErrorMessage>
                    {(msg) => <span className="text-red-600">{msg}</span>}
                  </ErrorMessage>*/
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="streetAddress"
                    label="Phường/Xã"
                    fullWidth
                    variant="outlined"
                    /* error={!ErrorMessage("streetAddress")}
                  helperText=<ErrorMessage>
                    {(msg) => <span className="text-red-600">{msg}</span>}
                  </ErrorMessage>*/
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="pincode"
                    label="Tên đường/Số nhà cụ thể"
                    fullWidth
                    variant="outlined"
                    /* error={!ErrorMessage("streetAddress")}
                  helperText=<ErrorMessage>
                    {(msg) => <span className="text-red-600">{msg}</span>}
                  </ErrorMessage>*/
                  />
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      color="primary"
                    >
                      Giao hàng
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};
