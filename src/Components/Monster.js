import React from 'react';
import ProgressBar from './ProgressBar';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return { monster: state.monster };
};


const MonsterConnect = ({monster}) => {

  return(
  <section>
    <div className="container">
      <div className="row">
        <div className="card-monstre col-sm-12">
          <div id="monsterCard">
            <div className="text-center">
              <div className="row">
                <div className="col-sm-2 offset-sm-3">
                  <span className="badge badge-danger ml-2 " id="degatSpanMonster"></span>
                  <img className="img-fluid" src="https://cdn.discordapp.com/attachments/740830706397347871/743726709660057662/alex_dino-V4.png" alt='monster' />
                </div>

                <div id="comboOnMonster" className="col-sm-6">

                </div>
              </div>
            </div >

               <ProgressBar pv={monster.pv} pvMax={monster.pvMax} bgType='bg-danger' faType='fa-heart' barName=' : pv' />

          </div>
        </div>
      </div>
    </div>
  </section >
)

  }


  const Monster = connect(mapStateToProps)(MonsterConnect)

export default Monster;