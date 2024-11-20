import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  nombre: Yup.string()
    .min(2, "Debe tener al menos 2 caracteres")
    .required("El nombre es obligatorio"),
  apellido: Yup.string()
    .min(2, "Debe tener al menos 2 caracteres")
    .required("El apellido es obligatorio"),
  email: Yup.string()
    .email("Debe ser un correo válido")
    .required("El correo es obligatorio"),
  asunto: Yup.string()
    .min(5, "El asunto debe tener al menos 5 caracteres")
    .required("El asunto es obligatorio"),
});

// valores iniciales
const initialValues = { nombre: "", apellido: "", email: "", asunto: "" };

const InputField = ({ id, name, label, type = "text", placeholder, as }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block font-medium mb-1">
      {label}
    </label>
    <Field
      id={id}
      name={name}
      type={type}
      as={as}
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-md"
    />
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm"
    />
  </div>
);

InputField.propTypes = {
  id: PropTypes.string.isRequired, // id es obligatorio
  name: PropTypes.string.isRequired, // name es obligatorio
  label: PropTypes.string.isRequired, // label es obligatorio
  type: PropTypes.string, // type es opcional, por defecto es 'text'
  placeholder: PropTypes.string.isRequired, // placeholder es obligatorio
  as: PropTypes.string, // as es opcional
};

const Contact = () => (
  <div className="min-h-screen bg-pink-200 pt-24 flex justify-center items-start">
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Contacto</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Datos enviados:", values);
          alert("Formulario enviado con éxito");
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              id="nombre"
              name="nombre"
              label="Nombre"
              placeholder="Escribe tu nombre"
            />
            <InputField
              id="apellido"
              name="apellido"
              label="Apellido"
              placeholder="Escribe tu apellido"
            />
            <InputField
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="Escribe tu correo electrónico"
            />
            <InputField
              id="asunto"
              name="asunto"
              label="Asunto"
              as="textarea"
              placeholder="Escribe tu asunto"
              rows="4"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default Contact;
