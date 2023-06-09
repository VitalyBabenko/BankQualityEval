import { useState } from "react";
import { Button, Container } from "@mui/material";
import style from "./FormPage.module.scss";
import { Header } from "../../components/Header";

import { UserInfoForm } from "../../components/UserInfoForm/UserInfoForm";
import { YourBanksForm } from "../../components/YourBanksForm";
import { RadioSection } from "../../components/RadioSection";
import { RatingSection } from "../../components/RatingSection";
import { TextFieldSection } from "../../components/TextFieldSection";
import { useForm } from "react-hook-form";
import { FormTitle } from "../../components/FormTitle";

export const FromPage = () => {
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm();
  const [age, setAge] = useState("");
  const [checkboxValues, setCheckboxValues] = useState({});
  const [selectedBanks, setSelectedBanks] = useState([]);
  const [rating, setRating] = useState(0);
  const [wishes, setWishes] = useState("");

  const handleCheckboxChange = (event) => {
    setCheckboxValues({
      ...checkboxValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleBanksChange = (selectedBanks) => {
    setSelectedBanks(selectedBanks);
  };

  const sendForm = (data) => {
    const result = {
      ...data,
      age,
      ...checkboxValues,
      selectedBanks,
      rating,
      wishes,
    };
    console.log(result);
  };

  return (
    <>
      <Header />
      <Container className={style.root} maxWidth="md">
        <form onSubmit={handleSubmit(sendForm)}>
          <FormTitle />

          <UserInfoForm age={age} setAge={setAge} register={register} />

          <YourBanksForm onChange={handleBanksChange} />

          <RadioSection
            onChange={handleCheckboxChange}
            question="Používáte nějakou bankovní aplikaci?"
            variants={[
              "Ano, používám ho pravidelně",
              "Někdy používám",
              "Nikdy jsem nepoužíval",
            ]}
          />

          <RadioSection
            onChange={handleCheckboxChange}
            question="Jste spokojeni s pohodlím aplikace?"
            variants={[
              "Spokojenost s aplikací",
              "Fungování aplikace je uspokojivé",
              "Nespokojenost s výkonem aplikace",
            ]}
          />

          <RadioSection
            onChange={handleCheckboxChange}
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
            onChange={handleCheckboxChange}
            question="Zhodnoťte online podporu banky, pokud jste ji použili."
            variants={[
              "Obecně uspokojivé",
              "Obecně neuspokojivé",
              "Nevyužil online podporu v bankovní aplikaci",
            ]}
          />

          <RadioSection
            onChange={handleCheckboxChange}
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
          <Button type="submit" className={style.submitBtn} variant="contained">
            Dále
          </Button>
        </form>
      </Container>
    </>
  );
};
