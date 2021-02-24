import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={ styles.profileContainer }>
      <img src="https://github.com/maiconloure.png" alt="logo-perfil"/>
      <div>
        <strong>Maicon Lourenço</strong>
        <p>
          <img src="icons/level.svg" alt="level-icon"/>
          Level #1
        </p>
      </div>
    </div>
  );
}