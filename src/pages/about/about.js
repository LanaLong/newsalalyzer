import '../../vendor/swiper/swiper.min.css';
import '../../vendor/swiper/swiper.min.js';
import './about.css';
import { queryBuider } from '../../js/utils/queryBuilder';
import { GitHubApi } from '../../js/modules/GitHubApi';
import { CommitCardList } from '../../js/components/CommitCardList';
import { CommitCard } from '../../js/components/CommitCard';
import { GITHUB_API_URL } from '../../js/constants/constants';
import { swiperHelper } from '../../js/utils/swiperHelper';


import Swiper from 'swiper';


const githubQueryBuilder = new queryBuider(GITHUB_API_URL);
const githubClient = new GitHubApi(githubQueryBuilder);

const createCommitCard = (...args) => new CommitCard(...args);
const commitCardList = new CommitCardList(createCommitCard);

function viewCommits() {
    githubClient.getCommits()
        .then(res => {
            commitCardList.createCommitCardList(res);
            const swiper = new Swiper(swiperHelper.GetContainerName(), swiperHelper.GetOptions());

        })
        .catch(error => {
            return Promise.reject(`Ошибка: ${error}`);
        });
};

viewCommits();

