import { useState } from "react";
import { Alert, Button, Container } from "@mui/material";
import { Header } from "../../components/Header";
import style from "./FormPage.module.scss";

import { UserInfoForm } from "../../components/UserInfoForm/UserInfoForm";
import { YourBanksForm } from "../../components/YourBanksForm";
import { RadioSection } from "../../components/RadioSection";
import { RatingSection } from "../../components/RatingSection";
import { TextFieldSection } from "../../components/TextFieldSection";
import { useForm } from "react-hook-form";
import { FormTitle } from "../../components/FormTitle";
import { sendForm } from "../../service/service";
import { useNavigate } from "react-router-dom";

export const FromPage = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });
  const [age, setAge] = useState("");
  const [checkboxValues, setCheckboxValues] = useState({});
  const [selectedBanks, setSelectedBanks] = useState([]);
  const [rating, setRating] = useState(0);
  const [wishes, setWishes] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  const navigate = useNavigate();

  const handleRadioChange = (event) => {
    setCheckboxValues({
      ...checkboxValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleBanksChange = (selectedBanks) => {
    setSelectedBanks(selectedBanks);
  };

  const submitForm = async (formInfo) => {
    const result = {
      ...formInfo,
      age,
      selectedBanks,
      ...checkboxValues,
      rating,
      wishes,
    };

    const response = await sendForm(result);

    if (response?.success) {
      navigate("/thank-you");
    } else {
      setIsAlert(true);
    }
  };

  return (
    <>
      <Header />
      <Container className={style.root} maxWidth="md">
        {isAlert && (
          <Alert
            className="alert"
            onClose={() => setIsAlert(false)}
            severity="error"
          >
            Něco se pokazilo. Prosím zkuste to znovu
          </Alert>
        )}

        <form onSubmit={handleSubmit(submitForm)}>
          <FormTitle />

          <UserInfoForm
            age={age}
            setAge={setAge}
            register={register}
            errors={errors}
          />

          <YourBanksForm onChange={handleBanksChange} />

          <RadioSection
            onChange={handleRadioChange}
            question="Používáte nějakou bankovní aplikaci?"
            variants={[
              "Ano, používám ho pravidelně",
              "Někdy používám",
              "Nikdy jsem nepoužíval",
            ]}
          />

          <RadioSection
            onChange={handleRadioChange}
            question="Jste spokojeni s pohodlím aplikace?"
            variants={[
              "Spokojenost s aplikací",
              "Fungování aplikace je uspokojivé",
              "Nespokojenost s výkonem aplikace",
            ]}
          />

          <RadioSection
            onChange={handleRadioChange}
            question="Stává se vám často, že bankovní aplikace nefunguje správně?"
            variants={[
              "Nesetkali jste se s žádnou chybnou funkcí aplikace",
              "Občas se v aplikaci vyskytnou drobné závady",
              "Aplikace často nefunguje správně",
            ]}
          />

          <RatingSection
            title={"Vyzkoušejte si přehlednost rozhraní aplikace"}
            rating={rating}
            setRating={setRating}
          />

          <RadioSection
            onChange={handleRadioChange}
            question="Zhodnoťte online podporu banky, pokud jste ji použili."
            variants={[
              "Obecně uspokojivé",
              "Obecně neuspokojivé",
              "Nevyužil online podporu v bankovní aplikaci",
            ]}
          />

          <RadioSection
            onChange={handleRadioChange}
            question="Jak dlouho trvalo vyřešení vašeho problému s online podporou?"
            variants={[
              "Vyřešení mého problému netrvalo dlouho",
              "Řešení mého problému trvalo déle, než jsem očekáva",
              "Online podpora nedokázala vyřešit můj problém",
              "Nevyužil online podporu v bankovní aplikaci",
            ]}
          />

          <TextFieldSection
            title={
              "Vaše přání ohledně bankovní aplikace a podpory v ní (nepovinné)"
            }
            wishes={wishes}
            setWishes={setWishes}
          />
          <Button
            disabled={!isValid}
            type="submit"
            className={style.submitBtn}
            variant="contained"
          >
            Dále
          </Button>
        </form>
      </Container>
    </>
  );
};
