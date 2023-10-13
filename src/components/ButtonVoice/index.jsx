import { useState } from 'react';
import { ButtonFalseStyled, ButtonTrueStyled } from './styles';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

export default function ButtonVoice({ returnVoice }) {
  const [voice, setVoice] = useState(false);

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  function buttonActive() {
    setVoice(true);
    SpeechRecognition.startListening({ continuous: true, language: 'pt-Br' });
  }

  function buttonDisabled() {
    setVoice(false);
    SpeechRecognition.stopListening();
    returnVoice(transcript);
  }

  return (
    <>
      {!voice ? (
        <ButtonFalseStyled onClick={() => buttonActive()} />
      ) : (
        <ButtonTrueStyled onClick={() => buttonDisabled()} />
      )}
    </>
  );
}
