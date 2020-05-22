import '../../vendor/swiper/swiper.min.css';
import './about.css';
import { QueryBuider } from '../../js/utils/QueryBuilder';
import { GitHubApi } from '../../js/modules/GitHubApi';
import { CommitCardList } from '../../js/components/CommitCardList';
import { CommitCard } from '../../js/components/CommitCard';
import { GITHUB_API_URL } from '../../js/constants/constants';
import { SwiperHelper } from '../../js/utils/SwiperHelper';


import Swiper from 'swiper';


const githubQueryBuilder = new QueryBuider(GITHUB_API_URL);
const githubClient = new GitHubApi(githubQueryBuilder);

const createCommitCard = (...args) => new CommitCard(...args);
const commitCardList = new CommitCardList(createCommitCard);

function viewCommits() {
    githubClient.getCommits()
        .then(res => {
            commitCardList.createCommitCardList(res);
            const swiper = new Swiper(SwiperHelper.GetContainerName(), SwiperHelper.GetOptions());

        })
        .catch(error => {
            return Promise.reject(`Ошибка: ${error}`);
        });
};

viewCommits();

