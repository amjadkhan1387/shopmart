import React from 'react'
import './Products.css'
import extension from '../../assets/flash/extension.jpg';
import cube from '../../assets/flash/cube.jpg';
import sunglass from '../../assets/flash/sunglass.jpg';
import earbuds from '../../assets/flash/earbuds.jpg';
import watch from '../../assets/flash/watch.jpg';
import pb from '../../assets/flash/pb.jpg';
import Rating from 'react-rating-stars-component';
import moonbtl from '../../assets/moonbtl.webp';
import { Link } from 'react-router-dom';


export const Products = () => {
  return (
    <div className='product'>
      <h1>Products Just for You</h1>
      <div className="card">
        <img src={extension} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Sunco Wire Extension|8 way </h5>
          <p className="card-text"><i>LKR. 1499</i></p>
          <Rating
            count={5}
            size={24}
            value={3}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>
        </div>
      </div>

      <div className="card">
        <img src={sunglass} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Modern Night Vision Sunglasses </h5>
          <p className="card-text"><i>LKR. 693</i></p>
          <Rating
            count={5}
            size={24}
            value={4}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>

        </div>
      </div>

      <div className="card">
        <img src={earbuds} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Canyon CNS | TWS8B headphones </h5>
          <p className="card-text"><i>LKR. 3998</i></p>
          <Rating
            count={5}
            size={24}
            value={5}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>
        </div>
      </div>

      <div className="card">
        <img src={cube} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Rubik Cube | Stickerless</h5>
          <p className="card-text">Rs. 1100 </p>
          <Rating
            count={5}
            size={24}
            value={3}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>
        </div>
      </div>

      <div className="card">
        <img src={moonbtl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Moon Fantasy Water Bottle | 600ML</h5>
          <p className="card-text">Rs. 1100 </p>
          <Rating
            count={5}
            size={24}
            value={3}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>
        </div>
      </div>


      <div className="card">
        <img src={watch} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Ultra Smart Watch | Dual Straps
          </h5>
          <p className="card-text">LKR. 9400 </p>
          <Rating
            count={5}
            size={24}
            value={2}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>
        </div>
      </div>

      <div className="card">
        <img src={pb} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Anker 30W Power Bank | 26800mAh</h5>
          <p className="card-text">LKR. 9400 </p>
          <Rating
            count={5}
            size={24}
            value={2}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>

        </div>
      </div>

      <div className="card">
        <img src={extension} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Sunco Wire Extension|8 way </h5>
          <p className="card-text"><i>LKR. 1499</i></p>
          <Rating
            count={5}
            size={24}
            value={3}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>

        </div>
      </div>

      <div className="card">
        <img src={sunglass} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Modern Night Vision Sunglasses </h5>
          <p className="card-text"><i>LKR. 693</i></p>
          <Rating
            count={5}
            size={24}
            value={4}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>

        </div>
      </div>

      <div className="card">
        <img src={earbuds} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Canyon CNS | TWS8B headphones </h5>
          <p className="card-text"><i>LKR. 3998</i></p>
          <Rating
            count={5}
            size={24}
            value={5}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>

        </div>
      </div>

      <div className="card">
        <img src={cube} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Rubik Cube | Stickerless</h5>
          <p className="card-text">Rs. 1100 </p>
          <Rating
            count={5}
            size={24}
            value={3}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>


        </div>
      </div>

      <div className="card">
        <img src={moonbtl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Moon Fantasy Water Bottle | 600ML</h5>
          <p className="card-text">Rs. 1100 </p>
          <Rating
            count={5}
            size={24}
            value={3}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>


        </div>
      </div>


      <div className="card">
        <img src={watch} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Ultra Smart Watch | Dual Straps
          </h5>
          <p className="card-text">LKR. 9400 </p>
          <Rating
            count={5}
            size={24}
            value={2}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>


        </div>
      </div>

      <div className="card">
        <img src={pb} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Anker 30W Power Bank | 26800mAh</h5>
          <p className="card-text">LKR. 9400 </p>
          <Rating
            count={5}
            size={24}
            value={2}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>


        </div>
      </div>

      <div className="card">
        <img src={extension} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Sunco Wire Extension|8 way </h5>
          <p className="card-text"><i>LKR. 1499</i></p>
          <Rating
            count={5}
            size={24}
            value={3}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>


        </div>
      </div>

      <div className="card">
        <img src={sunglass} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Modern Night Vision Sunglasses </h5>
          <p className="card-text"><i>LKR. 693</i></p>
          <Rating
            count={5}
            size={24}
            value={4}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>


        </div>
      </div>

      <div className="card">
        <img src={earbuds} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Canyon CNS | TWS8B headphones </h5>
          <p className="card-text"><i>LKR. 3998</i></p>
          <Rating
            count={5}
            size={24}
            value={5}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>


        </div>
      </div>

      <div className="card">
        <img src={cube} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Rubik Cube | Stickerless</h5>
          <p className="card-text">Rs. 1100 </p>
          <Rating
            count={5}
            size={24}
            value={3}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>


        </div>
      </div>

      <div className="card">
        <img src={moonbtl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Moon Fantasy Water Bottle | 600ML</h5>
          <p className="card-text">Rs. 1100 </p>
          <Rating
            count={5}
            size={24}
            value={3}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>


        </div>
      </div>


      <div className="card">
        <img src={watch} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Ultra Smart Watch | Dual Straps
          </h5>
          <p className="card-text">LKR. 9400 </p>
          <Rating
            count={5}
            size={24}
            value={2}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>


        </div>
      </div>

      <div className="card">
        <img src={pb} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Anker 30W Power Bank | 26800mAh</h5>
          <p className="card-text">LKR. 9400 </p>
          <Rating
            count={5}
            size={24}
            value={2}
            activeColor="#f00"
            inactiveColor="#ddd"
            edit={false}
          />
          <a className="btn btn-primary"><Link to='/signup'>Shop now</Link></a>


        </div>
      </div>
    </div>
  )
}
