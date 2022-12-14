import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useInput from "../../hooks/use-input";
import {
	ButtonTag,
	ContainerTag,
	FormWrapperTag,
	InputWrapperTag,
	WrapperTag,
	ErrorTag,
	FormTag,
} from "../login/Login";
import { AiOutlineCheck } from "react-icons/ai";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { checkEmail, checkId, checkNickName, signUp } from "../../services/user";
import { FcGoogle } from "react-icons/fc";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";

const Join = () => {
	const navigate = useNavigate();
	const [gender, setGender] = useState<string>("0");
	const [validCheckNickName, setValidCheckNickName] = useState<boolean>(false);
	const [validCheckId, setValidCheckId] = useState<boolean>(false);
	const [validCheckEmail, setValidCheckEmail] = useState<boolean>(false);
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangedHandler,
		inputBlurHandler: nameBlurHandler,
	} = useInput((value) => value.trim() !== "" && value.length >= 2);

	const {
		value: enteredNickName,
		isValid: enteredNickNameIsValid,
		hasError: nickNameInputHasError,
		valueChangeHandler: nickNameChangedHandler,
		inputBlurHandler: nickNameBlurHandler,
	} = useInput((value) => value.trim() !== "" && value.length <= 6);

	const {
		value: enteredId,
		isValid: enteredIdIsValid,
		hasError: idInputHasError,
		valueChangeHandler: idChangedHandler,
		inputBlurHandler: idBlurHandler,
	} = useInput((value) => value.trim() !== "" && value.length >= 5);

	const {
		value: enteredPassword,
		isValid: enteredPasswordIsValid,
		hasError: passwordInputHasError,
		valueChangeHandler: passwordChangedHandler,
		inputBlurHandler: passwordBlurHandler,
	} = useInput((value) => value.trim() !== "" && value.length >= 6);

	const {
		value: enteredPassword2,
		isValid: enteredPassword2IsValid,
		hasError: password2InputHasError,
		valueChangeHandler: password2ChangedHandler,
		inputBlurHandler: password2BlurHandler,
	} = useInput(
		(value) =>
			value.trim() !== "" &&
			value.length >= 6 &&
			enteredPassword === value
	);

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangedHandler,
		inputBlurHandler: emailBlurHandler,
	} = useInput(
		(value) =>
			value.trim() !== "" &&
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
	);

	let formValid = false;
	if (
		enteredNameIsValid &&
		enteredNickNameIsValid &&
		enteredIdIsValid &&
		enteredPasswordIsValid &&
		enteredPassword2IsValid &&
		enteredEmailIsValid &&
		validCheckNickName &&
		validCheckId &&
		validCheckEmail
	)
		formValid = true;

	const joinHandler = async (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		const res = await signUp({
			useNick: enteredNickName,
			useId: enteredId,
			usePw: enteredPassword,
			useName: enteredName,
			useGender: gender,
			useEmail: enteredEmail,
		});

		if (res.data.status === 200) {
			Swal.fire({
				position: "center",
				icon: "success",
				title: "?????? ?????? ??????!",
				timer: 1500,
				confirmButtonText: "??????",
				confirmButtonColor: "skyblue",
			}).then(() => navigate("/login"));
		}
	};

	// ????????????

	let checkedId = "";
	let checkedNickName = "";
	let checkedEmail = ""

	// ???????????? ??? ???????????? ?????????
	useEffect(() => {
		if (checkedId !== enteredId) {
			setValidCheckId(false);
		}
	}, [checkedId, enteredId]);
	useEffect(() => {
		if (checkedNickName !== enteredNickName) {
			setValidCheckNickName(false);
		}
	}, [checkedNickName, enteredNickName]);
	useEffect(() => {
		if (checkedEmail !== enteredEmail) {
			setValidCheckEmail(false);
		}
	}, [checkedEmail, enteredEmail]);

	const vaildCheckHandler = async (name: string) => {
		if (name === "id") {
			const res = await checkId(enteredId);
			if (res.data === true) {
				setValidCheckId(false);
				Swal.fire({
					position: "center",
					icon: "error",
					title: "????????? ????????? ?????????.",
					confirmButtonText: "??????",
					confirmButtonColor: "skyblue",
				});
			}else {
				setValidCheckId(true);
				checkedId = enteredId;
			}
		}
		if (name === "nickname") {
			const res = await checkNickName(enteredNickName);
			if (res.data === true) {
				setValidCheckNickName(false);
				Swal.fire({
					position: "center",
					icon: "error",
					title: "????????? ????????? ?????????.",
					confirmButtonText: "??????",
					confirmButtonColor: "skyblue",
				});
			} else {
				setValidCheckNickName(true);
				checkedNickName = enteredNickName;
			}
		}
		if (name === "email") {
			const res = await checkEmail(enteredEmail);
			if (res.data === true) {
				setValidCheckEmail(false);
				Swal.fire({
					position: "center",
					icon: "error",
					title: "????????? ????????? ?????????.",
					confirmButtonText: "??????",
					confirmButtonColor: "skyblue",
				});
			} else {
				setValidCheckEmail(true);
				checkedEmail = enteredEmail;
			}
		}
	};
	const changeRadioBtnHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		event.preventDefault();
		setGender(event.target.value);
	};

	return (
		<ContainerTag>
			<WrapperTag>
				<h2>????????????</h2>
				<FormWrapperTag>
					<FormTag onSubmit={joinHandler}>
						{/* ?????? */}
						<InputWrapperTag>
							<label htmlFor="name">??????</label>
							<input
								id="name"
								type="text"
								placeholder="????????? ??????????????????."
								value={enteredName}
								onChange={nameChangedHandler}
								onBlur={nameBlurHandler}
								required
							/>
							{nameInputHasError && (
								<ErrorTag>
									????????? 2?????? ?????? ??????????????????.
								</ErrorTag>
							)}
						</InputWrapperTag>
						{/* ????????? */}
						<InputWrapperTag>
							<label htmlFor="nickname">?????????</label>
							<VaildCheckWrapperTag>
								<input
									id="nickname"
									type="text"
									placeholder="???????????? ??????????????????."
									value={enteredNickName}
									onChange={nickNameChangedHandler}
									onBlur={nickNameBlurHandler}
									required
								/>
								<ButtonTag
									type="button"
									bgColor={
										validCheckNickName ? "skyblue" : "gray"
									}
									color="white"
									border={
										validCheckNickName ? "skyblue" : "none"
									}
									disabled={!enteredNickNameIsValid}
									onClick={() =>
										vaildCheckHandler("nickname")
									}
								>
									<AiOutlineCheck />
								</ButtonTag>
							</VaildCheckWrapperTag>
							{nickNameInputHasError && (
								<ErrorTag>
									???????????? 1 ~ 6?????? ????????? ??????????????????.
								</ErrorTag>
							)}
						</InputWrapperTag>
						{/* ????????? */}
						<InputWrapperTag>
							<label htmlFor="id">?????????</label>
							<VaildCheckWrapperTag>
								<input
									id="id"
									type="text"
									placeholder="???????????? ??????????????????."
									value={enteredId}
									onChange={idChangedHandler}
									onBlur={idBlurHandler}
									required
								/>
								<ButtonTag
									type="button"
									bgColor={validCheckId ? "skyblue" : "gray"}
									color="white"
									border={validCheckId ? "skyblue" : "none"}
									disabled={!enteredIdIsValid}
									onClick={() => vaildCheckHandler("id")}
								>
									<AiOutlineCheck />
								</ButtonTag>
							</VaildCheckWrapperTag>
							{idInputHasError && (
								<ErrorTag>
									???????????? 5?????? ?????? ??????????????????.
								</ErrorTag>
							)}
						</InputWrapperTag>
						{/* ????????? */}
						<InputWrapperTag>
							<label htmlFor="email">?????????</label>
							<VaildCheckWrapperTag>
								<input
									id="email"
									type="email"
									placeholder="???????????? ??????????????????."
									value={enteredEmail}
									onChange={emailChangedHandler}
									onBlur={emailBlurHandler}
									required
								/>
								<ButtonTag
									type="button"
									bgColor={validCheckEmail ? "skyblue" : "gray"}
									color="white"
									border={validCheckEmail ? "skyblue" : "none"}
									disabled={!enteredEmailIsValid}
									onClick={() => vaildCheckHandler("email")}
								>
									<AiOutlineCheck />
								</ButtonTag>
							</VaildCheckWrapperTag>
							{emailInputHasError && (
								<ErrorTag>
									???????????? ????????? ?????? ?????? ??????????????????.
								</ErrorTag>
							)}
						</InputWrapperTag>
						{/* ???????????? */}
						<InputWrapperTag>
							<label htmlFor="password">????????????</label>
							<input
								id="password"
								type="password"
								placeholder="??????????????? ??????????????????."
								value={enteredPassword}
								onChange={passwordChangedHandler}
								onBlur={passwordBlurHandler}
								required
							/>
							{passwordInputHasError && (
								<ErrorTag>
									??????????????? 6?????? ?????? ??????????????????.
								</ErrorTag>
							)}
						</InputWrapperTag>
						{/* ???????????? ?????? */}
						<InputWrapperTag>
							<label htmlFor="password2">???????????? ??????</label>
							<input
								id="password2"
								type="password"
								placeholder="??????????????? ????????? ??????????????????."
								value={enteredPassword2}
								onChange={password2ChangedHandler}
								onBlur={password2BlurHandler}
								required
							/>
							{password2InputHasError && (
								<ErrorTag>??????????????? ?????? ????????????.</ErrorTag>
							)}
						</InputWrapperTag>
						{/* ?????? ??????, ??????, ???????????? - ????????? */}
						<GenderTag>
							<label htmlFor="gender">??????</label>
							<div>
								<input
									type="radio"
									id="man"
									name="gender"
									value="1"
									onChange={changeRadioBtnHandler}
								/>
								<label htmlFor="man">??????</label>
							</div>

							<div>
								<input
									type="radio"
									id="girl"
									name="gender"
									value="2"
									onChange={changeRadioBtnHandler}
								/>
								<label htmlFor="girl">??????</label>
							</div>

							<div>
								<input
									type="radio"
									id="none"
									name="gender"
									value="0"
									onChange={changeRadioBtnHandler}
									checked
								/>
								<label htmlFor="none">????????????</label>
							</div>
						</GenderTag>
						{/* ???????????? ??????  */}
						<ButtonTag
							shadow={true}
							color="white"
							bgColor="skyblue"
							type="submit"
							disabled={!formValid}
						>
							????????????
						</ButtonTag>
					</FormTag>
				</FormWrapperTag>
			</WrapperTag>
		</ContainerTag>
	);
};

export default Join;

export const VaildCheckWrapperTag = styled.div`
	display: flex;
	column-gap: 0.5em;
	input {
		flex-basis: 95%;
	}
	button {
		flex-basis: 20%;
		font-size: 0.8rem;
	}
`;

export const GenderTag = styled.div`
	display: flex;
	align-items: center;
	column-gap: 1em;
	margin-bottom: 1.5em;
	div {
		display: flex;
		align-items: center;
		column-gap: 0.3em;
		label {
			font-size: 0.5rem;
			@media screen and (min-width: 372px) {
				font-size: 1rem;
			}
		}
		input {
			width: 16px;
			height: 16px;
			:checked {
				border: 6px solid black;
			}
		}
	}
`;
