import styles from "./SearchEngine.module.css";

import data from "./data.json"
import { DjangoLogo, MongoDBLogo, ReactLogo } from "./StackLogo";

export const SearchEngine = () => {
    

    const stacks = [
        {
            name: "MongoDB",
            image: <MongoDBLogo colors={"white"} />,
        },
        {
            name: "Django",
            image: <DjangoLogo colors={"white"} />,
        },
        {
            name: "React",
            image: <ReactLogo colors={"white"} />,
        },
    ];
    return (
      <div className={styles.SearchEngineWrapper}>
        <div className={styles.SearchBarWrapper}>
          <div className={styles.InputWrapper}>
            <input type="text" placeholder="Search anything..." />
            <button>
              <FilterIcon />
            </button>
          </div>
          <button>
            <SearchIcon />
          </button>
        </div>
        <div className={styles.SearchProfilesWrapper}>
          <h1>Search By Profile</h1>
          <div>
            {data.slice(0,6).map(({ name, profile, muid, roles }) => (
              <div key={muid} className={styles.ProfileCard}>
                <div>
                  <img src={profile} alt={`${name} profile`} />
                  <div>
                    <h2>{name}</h2>
                    <p>{muid}</p>
                  </div>
                </div>
                <ul>
                  {roles.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.SearchByStackWrapper}>
          {stacks.map(({ name, image }) => (
            <button className={styles.StackButton}>
              {image}
              <p>{name}</p>
            </button>
          ))}
        </div>
      </div>
    );
};

export const FilterIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="19"
            viewBox="0 0 28 19"
            fill="none"
        >
            <path
                d="M0.250005 17.4172V17.4167C0.250005 17.0298 0.376218 16.7175 0.626339 16.463C0.876201 16.2086 1.18014 16.0824 1.55496 16.0833H1.55556H7.77778C8.15402 16.0833 8.45867 16.2102 8.70856 16.4645C8.95865 16.7191 9.08423 17.0306 9.08333 17.4161V17.4167C9.08333 17.8036 8.95712 18.1158 8.707 18.3704C8.45714 18.6247 8.1532 18.7509 7.77838 18.75H7.77778H1.55556C1.17932 18.75 0.874674 18.6231 0.624784 18.3688C0.374694 18.1142 0.249112 17.8027 0.250005 17.4172ZM0.250005 9.50058V9.5C0.250005 9.1131 0.376218 8.80088 0.626339 8.54629C0.8762 8.29197 1.18014 8.16577 1.55496 8.16667H1.55556H17.1111C17.4873 8.16667 17.792 8.29352 18.0419 8.54787C18.292 8.80243 18.4176 9.11394 18.4167 9.49942V9.5C18.4167 9.8869 18.2905 10.1991 18.0403 10.4537C17.7905 10.708 17.4865 10.8342 17.1117 10.8333H17.1111H1.55556C1.17932 10.8333 0.874674 10.7065 0.624784 10.4521C0.374694 10.1976 0.249112 9.88606 0.250005 9.50058ZM0.250005 1.58392V1.58334C0.250005 1.19644 0.376218 0.884216 0.626339 0.629628C0.876201 0.375305 1.18014 0.249105 1.55496 0.250005H1.55556H26.4444C26.8207 0.250005 27.1253 0.376858 27.3752 0.631211C27.6253 0.885767 27.7509 1.19728 27.75 1.58276V1.58334C27.75 1.97024 27.6238 2.28246 27.3737 2.53705C27.1238 2.79137 26.8199 2.91757 26.445 2.91667H26.4444H1.55556C1.17932 2.91667 0.874674 2.78982 0.624784 2.53547C0.374694 2.28091 0.249112 1.9694 0.250005 1.58392Z"
                fill="#A3AED0"
                stroke="white"
                stroke-width="0.5"
            />
        </svg>
    );
};

export const SearchIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.2233 19.1214C23.071 16.7393 23.9418 13.7428 23.6585 10.7414C23.3752 7.74007 21.9592 4.95936 19.6985 2.965C17.4378 0.970635 14.5022 -0.0875651 11.489 0.00567737C8.47571 0.0989198 5.61116 1.3366 3.47808 3.46693C1.34314 5.59873 0.101413 8.46438 0.00594195 11.4799C-0.0895286 14.4954 0.968443 17.4339 2.96426 19.6965C4.96008 21.9591 7.74353 23.3755 10.7474 23.6571C13.7513 23.9387 16.7495 23.0643 19.1311 21.2121L19.1948 21.2788L25.4803 27.5658C25.6179 27.7034 25.7814 27.8126 25.9613 27.8871C26.1411 27.9617 26.3339 28 26.5286 28C26.7233 28 26.9161 27.9617 27.0959 27.8871C27.2758 27.8126 27.4393 27.7034 27.5769 27.5658C27.7146 27.4281 27.8238 27.2647 27.8983 27.0848C27.9728 26.9049 28.0112 26.7121 28.0112 26.5174C28.0112 26.3228 27.9728 26.13 27.8983 25.9501C27.8238 25.7702 27.7146 25.6068 27.5769 25.4691L21.2899 19.1836C21.2683 19.1623 21.2461 19.1415 21.2233 19.1214ZM18.1472 5.56357C18.9838 6.38664 19.6491 7.36721 20.1049 8.4487C20.5606 9.5302 20.7977 10.6912 20.8025 11.8648C20.8072 13.0384 20.5796 14.2013 20.1327 15.2865C19.6858 16.3716 19.0285 17.3576 18.1986 18.1874C17.3687 19.0173 16.3828 19.6746 15.2976 20.1215C14.2125 20.5685 13.0495 20.7961 11.876 20.7913C10.7024 20.7865 9.54135 20.5494 8.45986 20.0937C7.37836 19.638 6.3978 18.9726 5.57473 18.136C3.92989 16.4642 3.01231 14.2101 3.02186 11.8648C3.03141 9.51949 3.96731 7.27296 5.62571 5.61456C7.28411 3.95616 9.53065 3.02025 11.876 3.0107C14.2213 3.00115 16.4753 3.91873 18.1472 5.56357Z"
                fill="white"
            />
        </svg>
    );
};
