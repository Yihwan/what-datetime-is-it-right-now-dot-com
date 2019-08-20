import React, { useState } from 'react';
import Modal from 'react-modal';

import InitiateAZ5Sequence from './initiateAZ5Sequence';

import { 
  customStyles, 
  InnerContainer, 
  WarningHeader,
  WarningIconContainer,
  ModalContent,
  A35ActionContainer,
  ActionButton,
} from './style';

const AZ5Modal = ({ isModalOpen, toggleModalOpen, activateAZ5 }) => {
  const [shouldInitiateAZ5, initiateAZ5] = useState(false);

  if (shouldInitiateAZ5) {
    return <InitiateAZ5Sequence activateAZ5={activateAZ5} />;
  }

  return(
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => toggleModalOpen(false)}
      style={customStyles}
    >
      <InnerContainer>
        <WarningHeader>
          <WarningIconContainer>&#9888;</WarningIconContainer>
          <div>ВНИМАНИЕ ПРЕДУПРЕЖДЕНИЕ ОСТОРОЖНО ТРЕВОГА ОПАСНАЯ ОПАСНОСТЬ</div>
          <WarningIconContainer>&#9888;</WarningIconContainer>
        </WarningHeader>
        <ModalContent>
          Авари́йная защи́та ядерного реактора — совокупность устройств, предназначенная
          для быстрого прекращения цепной ядерной реакции в активной зоне реактора.
          «Правила ядерной безопасности реакторных установок атомных станций»
          Ростехнадзора определяют аварийную защиту как функцию быстрого перевода
          реактора в подкритический режим, а также комплекс систем, выполняющий эту функцию.
          Этим же документом в российском правовом поле определены требования к системе
          аварийной защиты. Активная аварийная защита автоматически срабатывает при достижении
          одним из параметров ядерного реактора значения, которое может привести к аварии.
          В качестве таких параметров могут выступать: температура, давление и расход теплоносителя,
          уровень и скорость увеличения мощности.
          Исполнительными элементами аварийной защиты являются, в большинстве случаев,
          стержни с веществом, хорошо поглощающим нейтроны (бором или кадмием).
          Иногда для остановки реактора жидкий поглотитель впрыскивают в контур теплоносителя.
      </ModalContent>
        <A35ActionContainer>
          <div>Продолжить?</div>
          <div>
            <ActionButton onClick={() => toggleModalOpen(false)}>нет</ActionButton>
            <ActionButton onClick={() => initiateAZ5(true)}>да</ActionButton>
          </div>
        </A35ActionContainer>
      </InnerContainer>
    </Modal>
  );
}


export default AZ5Modal; 